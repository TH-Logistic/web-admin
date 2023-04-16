export class BaseResponse<T> {
    success: boolean
    message?: string
    data?: T

    constructor(sucess: boolean, message?: string, data?: T) {
        this.success = sucess;
        this.message = message;
        this.data = data;
    }
}