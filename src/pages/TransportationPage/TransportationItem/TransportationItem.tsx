import React from "react"
import { Transportation } from "../../../entities/transportation"

export type TransportationItemProps = React.PropsWithChildren<{ item: Transportation }>
export default function TransportationItem({ item }: TransportationItemProps) {
  return (
    <div className="flex-1 p-4 border rounded-md">
      <div className="flex items-center justify-between gap-2">
        <p className="underline break-all decoration-primary-color text-primary-color underline-offset-2">{item.id}</p>
        <p className="px-6 text-sm font-semibold rounded-full text-truck-color-idle outline outline-border-color">Idle</p>
      </div>

      <p className="my-4 font-semibold text-secondary-dark">{item.licensePlate}</p>

      <div className="text-sm">
        <div className="flex justify-between ">
          <p className="text-secondary-light">Main Driver</p>
          <p className="font-normal text-secondary-dark ">{item.mainDriverName}</p>
        </div>

        <div className="flex justify-between mt-2">
          <p className="font-normal text-secondary-light">Co Driver</p>
          <p className="text-secondary-dark">{item.coDriverName}</p>
        </div>
      </div>
    </div>
  )
}
