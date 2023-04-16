import React from "react";
import { Garage } from "../../../entities/garage";

export type GarageItemProps = React.PropsWithChildren<{ item: Garage }>;

export default function GarageItem({ item }: GarageItemProps) {
    return (
        <div className="flex-1 border rounded-md ">
            <div className="p-4">
                <p className="underline decoration-primary-color text-primary-color underline-offset-2">{item.id}</p>
                <p className="my-2 font-normal text-secondary-dark">{item.name}</p>
                <p className="break-words text-ellipsis line-clamp-2 text-secondary-light">{item.address}</p>
            </div>
        </div>
    )
}
