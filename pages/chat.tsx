import React from "react";
import { Wrapper } from "../components";
import { UserCookie } from "../types";
import jwt from "jsonwebtoken";
import { GetServerSidePropsContext } from "next";

interface Props {
	user: UserCookie | null;
}

export function getServerSideProps(context: GetServerSidePropsContext) {
	const { authtoken } = context.req.cookies;
	const loggedIn = !!authtoken;
	const json = jwt.decode(authtoken);
	const user = !loggedIn
		? null
		: typeof json === "string"
			? JSON.parse(json)
			: json;
	return { props: { user } }
}

function Chat({ user }: Props) {
	return (
		<>
			<Wrapper page="chat" user={user}>
				Sorry, chat is unavailable right now
			</Wrapper>
		</>
	)
}

export default Chat;