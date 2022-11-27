interface User {
	username: string;
	password: string;
	id: number;
	admin: boolean;
}

export interface UserCookie {
	admin: boolean;
	username: string
}

export default User;