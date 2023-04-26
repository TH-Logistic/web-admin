
export interface Route {
    id: string;
    fromLocation: Location;
    toLocation: Location;
    length: number;
    tripBasedCost: number;
    tonBasedCLimit: number;
    isEnable: boolean;
}