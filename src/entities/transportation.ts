export class Transportation {
    id: string
    licensePlate: string
    load: number
    garage: any
    mainDriverName: string
    coDriverName: string

    constructor(id: string, licensePlate: string, load: number, garage: any, mainDriverName: string, coDriverName: string) {
        this.id = id;
        this.licensePlate = licensePlate;
        this.load = load;
        this.garage = garage;
        this.mainDriverName = mainDriverName;
        this.coDriverName = coDriverName;
    }
}