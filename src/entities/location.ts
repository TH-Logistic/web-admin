export class Location {
    id: string
    name: string
    address: string
    latitude: string
    longitude: string

    constructor(id: string, name: string, address: string, latitude: string, longitude: string) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}