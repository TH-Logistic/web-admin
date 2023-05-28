import moment from "moment";

const millisecondToString = (value: number, format?: string) => {
    return moment(value).format(format ?? 'L');
}

const millisecondToHHMM = (value: number) => {
    return millisecondToString(value, 'HH:mm:ss');
}

const millisecondToHHMMDDmmYYYY = (value: number): string => {
    return millisecondToString(value, "HH:mm DD/MM/YYYY")
}
export {
    millisecondToString,
    millisecondToHHMM,
    millisecondToHHMMDDmmYYYY
}