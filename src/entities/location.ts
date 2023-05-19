export class Location {
    public id: string;
    public name: string;
    public address: string;
    public latitude: number;
    public longitude: number;

    constructor(id: string, name: string, address: string, latitude: number, longitude: number) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}