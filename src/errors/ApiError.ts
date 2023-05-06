export class ApiError extends Error {
    statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }

    public toString = (): string => {
        return `Error No.${this.statusCode}: ${this.message}`;
    }
}