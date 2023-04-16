import { toASCII } from "punycode";

export class Pagination<T> {
    total: number;
    totalPage: number;
    content: T[];

    constructor(total: number, totalPage: number, content: T[]) {
        this.total = total;
        this.totalPage = totalPage;
        this.content = content;
    }
}