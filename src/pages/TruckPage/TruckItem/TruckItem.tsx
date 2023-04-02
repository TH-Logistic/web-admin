export default function TruckItem() {
  return (
    <div className="flex-1 p-4 border rounded-md">
      <div className="flex items-center justify-between ">
        <p className="underline decoration-primary-color text-primary-color underline-offset-2">T01</p>
        <p className="px-6 text-sm font-semibold rounded-full text-truck-color-idle outline outline-border-color">Idle</p>
      </div>

      <p className="my-4 font-semibold text-secondary-dark">59A-9999</p>

      <div className="text-sm">
        <div className="flex justify-between ">
          <p className="text-secondary-light">Main Driver</p>
          <p className="font-normal text-secondary-dark ">Le Hoang Thinh</p>
        </div>

        <div className="flex justify-between mt-2">
          <p className="font-normal text-secondary-light">Co Driver</p>
          <p className="text-secondary-dark">Vo Duc Trung Hieu</p>
        </div>
      </div>
    </div>
  )
}
