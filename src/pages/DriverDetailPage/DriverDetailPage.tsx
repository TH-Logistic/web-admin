import { Navigate, useLocation, useParams } from "react-router-dom"
import DetailHeader from "../../components/Headers/DetailHeader/DetailHeader";
import Divider from "../../components/Divider/Divider";
import StaffStatusItem from "../StaffPage/StaffStatus/StaffStatus";
import { Gender, StaffRole } from "../../entities/staff";
import MaleAvatar from '../../assets/male.svg';
import FeMaleAvatar from '../../assets/female.svg'
import { Driver } from "../../entities/driver";
import Orders from "../common/Orders/Orders";
import OrderView from "../common/Orders/OrderView";
import moment from 'moment';
import { millesecondToString } from "../../utils/formatter";

export default function DriverDetailPage() {
    const { driverId } = useParams();
    const { state } = useLocation();

    // const item = state as Staff;
    const item = new Driver(
        'ID',
        'Staff Username',
        Gender.MALE,
        '902514621',
        '3686856868',
        'MB Bank',
        "Le Hoang Thinh",
        "thinhlh0812@gmail.com",
        StaffRole.DRIVER,
        'www.thinhlh.com',
        1454521239279,
        'new'
    );
    // if (item === null) {
    //     return <Navigate to={'/drivers'} />
    // }
    return (
        <div>
            <DetailHeader header="Driver" id={item.id} />
            <Divider />

            <div className="flex flex-row gap-8 px-8 mt-8">
                <div className="flex flex-col justify-end flex-1 gap-4">
                    <p className="font-bold">Driver's Information</p>
                    <div className="flex flex-col gap-4 p-4 border rounded-md border-border-color ">
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

                <div className="flex flex-col flex-1">
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

            <OrderView />
        </div>
    )
}