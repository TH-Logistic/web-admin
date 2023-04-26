import AuthResponse from "../../entities/auth-response";
import { BaseResponse } from "../../entities/base-response";
import { authClient } from "../../ports/clients";
import { ACCESS_TOKEN } from "../../ports/local-storage-key";

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
        localStorage.setItem(ACCESS_TOKEN, data.accessToken)
    }

    return data
}

export { login };