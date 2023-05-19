import React from "react";
import { Garage } from "../../../entities/garage";
import { useNavigate } from "react-router-dom";

export type GarageItemProps = React.PropsWithChildren<{ item: Garage }>;

export default function GarageItem({ item }: GarageItemProps) {
    const navigate = useNavigate();
    return (
        <div className="flex-1 border rounded-md" onClick={() => navigate(`/locations/garage/${item.id}`, { state: item })}>
            <div className="p-4">
                <p className="underline decoration-primary-color text-primary-color underline-offset-2">{item.id}</p>
                <p className="my-2 font-normal text-secondary-dark">{item.name}</p>
                <p className="break-words text-ellipsis line-clamp-2 text-secondary-light">{item.address}</p>
            </div>
        </div>
    )
}
