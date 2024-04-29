import { useMemo } from "react";



import { useCookieManager } from "@/context/cache.context";
import ENVIRONMENT_VAR from "../constants/env/env.const";
import { User } from "../models/entities/user/user.entity";

function useCookieSessionManager() {
	const { setCookie, cookies, removeCookie } = useCookieManager();
	const { COOKIE_DATA, COOKIE_TOKEN } = ENVIRONMENT_VAR;

	const removeSessionFromCookie = () => {
		removeCookie(COOKIE_TOKEN);
		removeCookie(COOKIE_DATA);
	};

	const setSessionDataUser = (data: User) => {
		const values = JSON.stringify({ ...data });
		setCookie(COOKIE_DATA, values);
	};

	const setSessionTokenUser = (data: ISessionData) => {
		const values = JSON.stringify({ ...data });
		setCookie(COOKIE_TOKEN, values);
	};

	const token = useMemo(() => cookies[COOKIE_TOKEN], [cookies]);
	const data = useMemo(() => cookies[COOKIE_DATA], [cookies]);

	return {
		removeSessionFromCookie,
		setSessionDataUser,
		setSessionTokenUser,
		tokenSession: token ? (JSON.parse(token) as ISessionData) : undefined,
		dataSession: data ? (JSON.parse(data) as User) : undefined,
	};
}
export default useCookieSessionManager;

export interface ISessionData {
	token: string;
}
