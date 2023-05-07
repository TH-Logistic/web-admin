import { ACCESS_TOKEN, USER } from "../ports/cookies-key";
import Cookies from 'js-cookie';

const setAuth = (token: string, user?: object, expires = 7) => {
    Cookies.set(ACCESS_TOKEN, token, { expires: expires })
    if (user) {
        Cookies.set(USER, JSON.stringify(user), { expires: expires })
    }
}

const removeAuth = () => {
    Cookies.remove(ACCESS_TOKEN);
    Cookies.remove(USER);
}

export { setAuth, removeAuth };

export default function useAuth() {
    const token = Cookies.get(ACCESS_TOKEN);

    const user = Cookies.get(USER);

    // const loggedIn: boolean = (token !== undefined && user !== undefined);
    // TODO will update to above check when server return logged user
    const loggedIn: boolean = token !== undefined;


    return {
        token,
        loggedIn,
        user: user ? JSON.parse(user) : undefined,
        setAuth,
        removeAuth,
    }
}

