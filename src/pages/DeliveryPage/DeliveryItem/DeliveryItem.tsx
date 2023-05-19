import { useNavigate } from "react-router-dom"
import { Location } from "../../../entities/location"

export type DeliveryItemProps = {
  item: Location
}
export default function DeliveryItem({ item }: DeliveryItemProps) {
  const navigate = useNavigate();
  return (
    <div className="flex-1 border rounded-md" onClick={() => navigate(`/locations/delivery/${item.id}`, { state: item })}>
      <div className="p-4">
        <p className="underline decoration-primary-color text-primary-color underline-offset-2">{item.id}</p>
        <p className="my-2 font-normal text-secondary-dark">{item.name}</p>
        <p className="break-words text-ellipsis line-clamp-2 text-secondary-light">{item.address}</p>
      </div>
    </div>
  )
}
