import crypto from "crypto";
import { User } from "../types";

const users: User[] = [
	{
		username: "admin",
		password: "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918",
		id: 0,
		admin: true
	}
];

function getHighestId(users: User[]) {
	const ids = users.map((user) => user.id);
	return Math.max(...ids);
}

export function addUser(username: string, password: string) {
	const hashedPassword = crypto
		.createHash("sha256")
		.update(password)
		.digest("hex");
	const dupeUsers = users.filter((user) => user.username === username);
	if (dupeUsers.length !== 0) return "Error: Username already taken";
	const id = getHighestId(users);
	users.push({ username, password: hashedPassword, id, admin: false });
}

export function verifyCredentials(username: string, password: string) {
	const user = users.find((user) => user.username === username);
	const hashedPassword = crypto
		.createHash("sha256")
		.update(password)
		.digest("hex");
	return user ? user.password === hashedPassword : false;
}

export function isAdmin(username: string) {
	return !!users.find((user) => user.username === username && user.admin);
}