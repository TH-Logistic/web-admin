import { ACCESS_TOKEN, USER } from "../ports/cookies-key";
import Cookies from 'js-cookie';

const setAuth = (token: string, user?: object, expires = 7) => {
    Cookies.set(ACCESS_TOKEN, token, { expires: expires })
    if (user) {
        Cookies.set(USER, JSON.stringify(user), { expires: expires })
    }
}

export { setAuth };

export default function useAuth() {
    const token = Cookies.get(ACCESS_TOKEN);

    const user = Cookies.get(USER);


    const removeToken = () => {
        Cookies.remove(ACCESS_TOKEN)
        Cookies.remove(USER)
    }

    return {
        token,
        user: user ? JSON.parse(user) : undefined,
        setAuth,
        removeAuth: removeToken,
    }
}

