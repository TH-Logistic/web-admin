import { Organization } from "../../../entities/organization";

export type OrganizationItemProps = {
  item: Organization
}

export default function OrganizationItem({ item }: OrganizationItemProps) {
  return (
    <div className="flex-1 border rounded-md p-4">
      <div className="flex flex-row justify-between gap-4">
        <p className="underline decoration-primary-color text-primary-color underline-offset-2">O01</p>
        <div className="flex flex-row gap-2">
          <p>Part Service</p>
          <p>Provider</p>
        </div>
      </div>
      <p className="my-2 font-normal text-secondary-dark">Organization Name</p>
      <div className="flex flex-row justify-between">
        <p className="text-secondary-light">Credit Card</p>
        <p className="text-secondary-dark">3686856868</p>
      </div>

      <div className="flex flex-row justify-between">
        <p className="text-secondary-light">Contact</p>
        <p className="text-secondary-dark">Vo Duc Trung Hieu</p>
      </div>

      <div className="flex flex-row justify-between">
        <p className="text-secondary-light">Phone Number</p>
        <p className="text-secondary-dark">0902514621</p>
      </div>
    </div>
  )
}