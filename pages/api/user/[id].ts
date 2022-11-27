import type { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
	const methodHandlers = {
		patch() { },
		delete() {
		},
		unknownMethod() {
			res.status(405).send("405 Method Not Allowed");
		},
	}

	const methodHandler: Function = methodHandlers[req.method.toLowerCase()] || methodHandlers.unknownMethod;
	methodHandler();
}

export default handler;