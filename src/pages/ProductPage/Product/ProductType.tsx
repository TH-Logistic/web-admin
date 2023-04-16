enum ProductType {
    Dangerous = 1,
    Fragile = 2,
    Machine = 3,
    Electronic = 4,
    Agricultural = 5,
    Food = 6,
    Cosmetic = 7,
    Medicine = 8,
    Others = 9
}
export function getProductTypeFromNumber(value: number): ProductType {
    return value as ProductType
}

export default ProductType;