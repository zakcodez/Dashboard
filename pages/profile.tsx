import jwt from "jsonwebtoken";
import { GetServerSidePropsContext } from "next";
import { useEffect } from "react";
import { Wrapper } from "../components";
import { UserCookie } from "../types";

interface Props {
	loggedIn: boolean;
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
	return { props: { loggedIn, user } }
}

function Profile({ loggedIn, user }: Props) {
	useEffect(() => {
		if (!loggedIn) location.assign("/login");
	});

	return (
		<>
			<Wrapper page="" user={user}>
				{loggedIn && <>
					<p>Username: {user.username}</p>
					<p>Admin: {user.admin}</p>
				</>
				}
			</Wrapper>
		</>
	)
}

export default Profile;