import { billingClient } from "../../ports/clients";

const getBillingByJob = async (jobId: string) => {

    const response = await billingClient.get(`/find-by-job/${jobId}`);

    const data = response.data;

    return data
}

const getBillingByOrganization = async (organizationId: string) => {
    const response = await billingClient.get(`statistic/organization/${organizationId}`);

    const data = response.data;

    return data;
}

export {
    getBillingByJob,
    getBillingByOrganization,
};