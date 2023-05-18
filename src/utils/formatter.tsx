import moment from "moment";

const millesecondToString = (value: number, format?: string) => {
    return moment(value).format(format ?? 'L');
}
export { millesecondToString }