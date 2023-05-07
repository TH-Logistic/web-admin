import { Organization, OrganizationType, ProviderType } from "../../../entities/organization";

export type OrganizationItemProps = {
  item: Organization
}

export default function OrganizationItem({ item }: OrganizationItemProps) {
  const providerType = item.providerType ? ProviderType.fromValue(item.providerType) : undefined;
  return (
    <div className="flex-1 p-4 border rounded-md">
      <div className="flex flex-row justify-between gap-4 sm:items-center">
        <p className="flex-grow underline break-all decoration-primary-color basis-1/3 text-primary-color underline-offset-2">{item.id}</p>
        <div className="flex flex-col-reverse justify-end gap-4 sm: sm:items-center sm:flex-row">
          {/* {providerType && <p className={`box-content px-4 py-2 text-provider-type-1 font-semibold text-center border rounded-full border-border-color`}>{providerType.valueString}</p>}
        {providerType && <p className={`box-content px-4 py-2 text-provider-type-2 font-semibold text-center border rounded-full border-border-color`}>{providerType.valueString}</p>}
        {providerType && <p className={`box-content px-4 py-2 text-provider-type-3 font-semibold text-center border rounded-full border-border-color`}>{providerType.valueString}</p>} */}

          {providerType && <p className={`box-border px-4 py-2 font-medium outline-none text-provider-type-${providerType.value} font-semibold text-center border rounded-full border-border-color`}>{providerType.valueString}</p>}
          <p className="px-4 py-2 font-semibold text-center rounded-full bg-primary-color text-on-primary">{OrganizationType.fromValue(item.type).toString()}</p>
        </div>
      </div>
      <p className="my-2 text-lg font-semibold text-secondary-dark">{item.name}</p>
      <div className="flex flex-row justify-between">
        <p className="text-secondary-light">Credit Card</p>
        <p className="text-secondary-dark">{item.creditCard}</p>
      </div>

      <div className="flex flex-row justify-between">
        <p className="text-secondary-light">Contact</p>
        <p className="text-secondary-dark">{item.contactName}</p>
      </div>

      <div className="flex flex-row justify-between">
        <p className="text-secondary-light">Phone Number</p>
        <p className="text-secondary-dark">{item.contactNumber}</p>
      </div>
    </div>
  )
}