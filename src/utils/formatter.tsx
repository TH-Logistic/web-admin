import moment from "moment";

const millisecondToString = (value: number | string, format?: string) => {
    return moment(Number(value)).format(format ?? "DD/MM/YYYY");
}

const millisecondToHHMM = (value: number | string) => {
    return millisecondToString(Number(value), 'HH:mm:ss');
}

const millisecondToHHMMDDmmYYYY = (value: number | string): string => {
    return millisecondToString(Number(value), "HH:mm DD/MM/YYYY")
}
export {
    millisecondToString,
    millisecondToHHMM,
    millisecondToHHMMDDmmYYYY
}