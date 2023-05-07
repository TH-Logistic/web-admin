class OrganizationType {
    static readonly CUSTOMER = new OrganizationType(1, "Customer");
    static readonly PROVIDER = new OrganizationType(2, "Provider");
    static readonly PARTNER = new OrganizationType(3, "Partner");

    private constructor(
        private readonly value: number,
        private readonly valueString: string
    ) {
    }

    public toString = () => this.valueString;
    public static fromValue = (value: number): OrganizationType => {
        switch (value) {
            case 1:
                return OrganizationType.CUSTOMER;
            case 2:
                return OrganizationType.PROVIDER;
            case 3:
                return OrganizationType.PARTNER;
            default:
                throw new Error('Organization not valid')
        }
    }
}

class ProviderType {
    static readonly FUEL = new ProviderType(1, "Fuel");
    static readonly REPAIR_SERVICE = new ProviderType(2, "Repair Service");
    static readonly REPLACE_SERVICE = new ProviderType(3, "Replace Service");

    private constructor(
        public readonly value: number,
        public readonly valueString: string
    ) {
    }

    public toString = () => this.valueString;
    public static fromValue = (value?: number): ProviderType => {
        switch (value) {
            case 1:
                return ProviderType.FUEL;
            case 2:
                return ProviderType.REPAIR_SERVICE;
            case 3:
                return ProviderType.REPLACE_SERVICE;
            default:
                throw new Error('Organization not valid')
        }
    }
}

export interface Organization {
    id: string,
    name: string,
    creditCard: string,
    contactName: string,
    contactNumber: string,
    type: number,
    providerType?: number
}

export { ProviderType, OrganizationType };