import { Navigate, useLocation, useParams } from "react-router-dom"
import DetailHeader from "../../components/Headers/DetailHeader/DetailHeader";
import Divider from "../../components/Divider/Divider";
import StaffStatusItem from "../StaffPage/StaffStatus/StaffStatus";
import { Gender } from "../../entities/staff";
import MaleAvatar from '../../assets/male.svg';
import FeMaleAvatar from '../../assets/female.svg'
import { Driver } from "../../entities/driver";
import OrderView from "../common/Orders/OrderView";
import { ROUTES } from "../../utils/routes";

export default function DriverDetailPage() {
    const { driverId } = useParams();
    const { state } = useLocation();

    const item = state as Driver;
    if (item == null) {
        return <Navigate to={ROUTES.DRIVERS} />
    }
    function millesecondToString(birthday: number): import("react").ReactNode {
        throw new Error("Function not implemented.");
    }

    return (
        <div>
            <DetailHeader header="Driver" id={item.id} />

            <div className="flex flex-row items-stretch gap-8 px-8 mt-8">
                <div className="flex flex-col flex-1 gap-4">
                    <p className="font-bold">Driver's Information</p>
                    <div className="flex flex-col gap-4 p-4 border rounded-md border-border-color ">
                        <div className="flex justify-between">
                            <p className="font-semibold text-secondary-dark">Name</p>
                            <p>{item.name}</p>
                        </div>

                        <div className="flex justify-between">
                            <p className="font-semibold text-secondary-dark">Phone number</p>
                            <p>{item.phoneNumber}</p>
                        </div>

                        <div className="flex justify-between">
                            <p className="font-semibold text-secondary-dark">Date of birth</p>
                            <p>{millesecondToString(item.birthday)}</p>
                        </div>

                        <div className="flex justify-between">
                            <p className="font-semibold text-secondary-dark">Number of trips</p>
                            <p>120</p>
                        </div>

                        <div className="flex justify-between">
                            <p className="font-semibold text-secondary-dark">Joined date</p>
                            <p>23/02/2023</p>
                        </div>

                        <div className="flex justify-between">
                            <p className="font-semibold text-secondary-dark">Bank name</p>
                            <p>{item.bankName}</p>
                        </div>

                        <div className="flex justify-between">
                            <p className="font-semibold text-secondary-dark">Bank account</p>
                            <p>{item.bankAccount}</p>
                        </div>

                        <div className="flex justify-between">
                            <p className="font-semibold text-secondary-dark">Status</p>
                            <StaffStatusItem status={item.status} />
                        </div>

                    </div>
                </div>

                <div className="flex flex-col self-end flex-1">
                    <div className="flex justify-center">
                        <img src={item.gender === Gender.MALE ? MaleAvatar : FeMaleAvatar} alt="Avatar" className="rounded-full outline outline-border-color" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="font-bold">Salary</p>
                        <div className="flex flex-col p-4 border rounded-md border-border-color ">
                            <div className="flex flex-row justify-between">
                                <p>Salary</p>
                            </div>
                            <ul className="flex flex-col px-4 list-disc list-inside">
                                <li className=" text-secondary-light">
                                    <div className="inline-flex flex-row justify-between ">
                                        <p>{`Base salary: 14,000,000`}</p>
                                    </div>
                                </li>

                                <li className="text-secondary-light">
                                    <div className="inline-flex flex-row justify-between">
                                        <p>{`Additional Salary: 6,000,000`}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-8 my-16">
                <OrderView />
            </div>
        </div>
    )
}