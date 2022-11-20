import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../types";

function handler(req: NextApiRequest, res: NextApiResponse<User | string>) {
	if (req.method !== "POST") return res.status(405).send("405 Method Not Allowed");
	if (!req.body || !("username" in req.body) || !("password" in req.body))
		return res.status(400).send("400 Bad Request");
	const { username, password }: { username: string, password: string } = req.body;
}

export default handler;