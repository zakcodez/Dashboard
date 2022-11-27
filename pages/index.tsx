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

function HomePage({ user }: Props) {
	return (
		<>
			<Wrapper user={user} page={""}>
					<h3>Welcome back, {user ? user.username : "human"}</h3>
			</Wrapper>
		</>
	)
}

export default HomePage;