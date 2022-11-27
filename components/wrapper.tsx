import { Navbar } from ".";
import { Page, UserCookie } from "../types";

interface Props extends React.PropsWithChildren {
	user: UserCookie | null;
	page: Page;
}

function Wrapper({ children, user, page }: Props) {
	return (
		<>
			<Navbar user={user} page={page} />
			<div className="container-fluid">{children}</div>
		</>
	)
}

export default Wrapper;