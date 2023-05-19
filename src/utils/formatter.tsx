import moment from "moment";

const millesecondToString = (value: number, format?: string) => {
    return moment(value).format(format ?? 'L');
}

const millesecondToHHMM = (value: number) => {
    return millesecondToString(value, 'HH:mm:ss');
}
export { millesecondToString, millesecondToHHMM }