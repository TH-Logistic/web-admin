enum OrganizationType {
    CUSTOMER = 1,
    PARTNER = 2,
    PROVIDER = 3,
}
const getOrganizationTypeValue = (type?: OrganizationType) => {
    switch (type) {
        case OrganizationType.CUSTOMER:
            return 'Customer';
        case OrganizationType.PROVIDER:
            return 'Provider';
        case OrganizationType.PARTNER:
            return 'Partner';
        default:
            return undefined;
    }
}

enum ProviderType {
    FUEL = 1,
    REPAIR_SERVICE = 2,
    REPLACE_SERVICE = 3
}

const getProviderTypeValue = (type?: ProviderType) => {
    switch (type) {
        case ProviderType.FUEL:
            return 'Fuel';
        case ProviderType.REPAIR_SERVICE:
            return 'Repair Service';
        case ProviderType.REPLACE_SERVICE:
            return 'Replace Service';
        default:
            return undefined;
    }
}

export interface Organization {
    id: string,
    name: string,
    creditCard: string,
    contactName: string,
    contactNumber: string,
    type: OrganizationType,
    providerType?: ProviderType
}

export {
    ProviderType,
    OrganizationType,
    getOrganizationTypeValue,
    getProviderTypeValue,
};