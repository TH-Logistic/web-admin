import { Billing } from "../../entities/billing";
import { billingClient } from "../../ports/clients";

const getBillingByJob = async (jobId: string) => {
    billingClient.defaults.baseURL = "http://www.thinhlh.com:8086/api/v1/billing"
    const response = await billingClient.get<Billing[]>(`/find-by-job/${jobId}`);

    const data = response.data;

    return data
}

const getBillingByOrganization = async (organizationId: string) => {

    const response = await billingClient.get<Billing[]>(`statistic/organization/${organizationId}`);

    const data = response.data;

    return data;
}

export {
    getBillingByJob,
    getBillingByOrganization,
};