import { organizationClient } from "../../ports/clients"
import { Pagination } from "../../entities/pagination"
import { QueryParams } from "../common/query-params"
import { Organization } from "../../entities/organization"

const getOrganizations = async ({
    page = 0,
    size = 5,
    keyword = undefined,
    types = []
}: QueryParams<{
    types?: number[],
    keyword?: string,
}>): Promise<Pagination<Organization>> => {
    const response = await organizationClient.get<Pagination<Organization>>('/organization/list', {
        params: {
            page,
            size,
            keyword,
            types: types.join(',')
        }
    })

    return response.data
}

const createOrganization = async (organization: Omit<Organization, 'id'>) => {
    console.log(organization)
    const response = await organizationClient.post('/organization', {
        ...organization
    })

    return response.data;
}

export {
    getOrganizations,
    createOrganization
}

