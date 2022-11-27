import type { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method.toLowerCase() !== "post") return res.status(405).send("405 Method Not Allowed");
	if (!req.body || !req.body.username || !req.body.password)
		return res.status(400).send("405 Bad Request");
	const user: { username: string, password: string } = req.body;
}

export default handler;