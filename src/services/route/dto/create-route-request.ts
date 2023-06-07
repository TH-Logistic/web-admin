export interface CreateRouteRequest {
    startLocationId: string,
    endLocationId: string,
    // "length": 25,
    length?: number
    tripBasedCost: number,
    tonBasedLimit: number
}