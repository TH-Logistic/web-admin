import { Location } from "./location";

export interface Route {
    id: string;
    fromLocation: Location;
    toLocation: Location;
    length: number;
    tripBasedCost: number;
    tonBasedLimit: number;
    isEnable: boolean;
}