import AuthResponse from "../../entities/auth-response";
import { setAuth } from "../../hooks/use-auth";
import { authClient } from "../../ports/clients";

const login = async (
    phoneNumber: string,
    password: string
): Promise<AuthResponse | undefined> => {
    const response = await authClient.post<AuthResponse>('/login', {
        phoneNumber,
        password,
    })

    const data = response.data;

    if (data?.accessToken) {
        setAuth(data.accessToken)
    }

    return data
}

export { login };