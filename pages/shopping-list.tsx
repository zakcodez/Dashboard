import { GetServerSidePropsContext } from "next";
import React from "react";
import { Wrapper } from "../components";
import { UserCookie } from "../types";
import jwt from "jsonwebtoken";

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

function ShoppingList({ user }: Props) {
	return (
		<>
			<Wrapper page="shopping-list" user={user}>
				Sorry, shopping list is unavailable right now
			</Wrapper>
		</>
	)
}

export default ShoppingList;