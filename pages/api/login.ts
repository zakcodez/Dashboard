import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { isAdmin, verifyCredentials } from "../../lib/database";

const key = process.env.SECRET;

function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "POST") return res.status(405).send("405 Method Not Allowed");
	if (!req.body || !req.body.username || !req.body.password) return res.status(400).send("400 Bad Request");
	const { username, password }: { username: string, password: string } = req.body;
	if (!verifyCredentials(username, password)) return res.status(401).send("401 Unauthorized");
	const admin = isAdmin(username);
	const token = jwt.sign({ username, admin }, key);
	console.log({token, admin, username, password});
	res.json({ token });
}

export default handler;