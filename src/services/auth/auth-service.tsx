import AuthResponse from "../../entities/auth-response";
import { setAuth } from "../../hooks/use-auth";
import { authClient } from "../../ports/clients";

const login = async (
    email: string,
    password: string
): Promise<AuthResponse | undefined> => {
    const response = await authClient.post<AuthResponse>('/login', {
        email: email,
        password: password,
    })

    const data = response.data;

    if (data?.accessToken) {
        setAuth(data.accessToken)
    }

    return data
}

export { login };