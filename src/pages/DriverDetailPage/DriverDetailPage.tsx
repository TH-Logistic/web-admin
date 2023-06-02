import { Navigate, useNavigate, useParams } from "react-router-dom"
import DetailHeader from "../../components/Headers/DetailHeader/DetailHeader";
import Divider from "../../components/Divider/Divider";
import StaffStatusItem from "../StaffPage/StaffStatus/StaffStatus";
import { Gender } from "../../entities/staff";
import MaleAvatar from '../../assets/male.svg';
import FeMaleAvatar from '../../assets/female.svg'
import { ROUTES } from "../../utils/routes";
import { millisecondToString } from "../../utils/formatter";
import { useQuery } from "@tanstack/react-query";
import { StaffService } from "../../services/staff";
import LoadingDialog from "../../components/Dialog/LoadingDialog";
import InfoDialog from "../../components/Dialog/InfoDialog";
import { DriverService } from "../../services/driver";

export default function StaffDetailPage() {
    const { driverId } = useParams();
    const navigate = useNavigate();

    const { data: driver, error, isLoading } = useQuery({
        queryKey: ['getStaffById', driverId],
        queryFn: driverId ? () => StaffService.getStaffById(driverId) : undefined
    });

    const { data: driverNumberOfTrip } = useQuery({
        queryKey: ['getDriverNumberOfTrip', driverId],
        queryFn: driverId ? () => DriverService.getDriverNumberOfTrip(driverId) : undefined
    });

    if (!driverId) {
        return <Navigate to={ROUTES.DRIVERS} />
    }

    if (isLoading) {
        return <LoadingDialog open />
    }
    return driver ?
        (
            <div>
                <DetailHeader header="Driver" id={driverId} />

                <div className="px-8 mt-8">
                    <div className="flex flex-row items-stretch gap-8">
                        <div className="flex flex-col justify-end flex-1 gap-4">
                            <p className="font-bold">Driver's Information</p>
                            <div className="flex flex-col gap-4 p-4 border rounded-md border-border-color ">
                                <div className="flex justify-between">
                                    <p className="font-semibold text-secondary-dark">Phone number</p>
                                    <p>{driver.phoneNumber}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold text-secondary-dark">Number of trip</p>
                                    <p>{driverNumberOfTrip ?? 0}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold text-secondary-dark">Date of birth</p>
                                    <p>{millisecondToString(driver.birthday)}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold text-secondary-dark">Joined date</p>
                                    <p>23/02/2023</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold text-secondary-dark">Bank name</p>
                                    <p>{driver.bankName}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold text-secondary-dark">Bank account</p>
                                    <p>{driver.bankAccount}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold text-secondary-dark">Status</p>
                                    <StaffStatusItem status={driver.status} />
                                </div>

                            </div>
                        </div>

                        <div className="flex flex-col flex-1">
                            <div className="flex items-center justify-center flex-1">
                                <img src={driver.gender === Gender.MALE ? MaleAvatar : FeMaleAvatar} alt="Avatar" className="w-32 h-32 rounded-full outline outline-border-color" />
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
                </div>
            </div>
        ) :
        (
            <InfoDialog
                success={false}
                open
                onProceedClicked={() => {
                    navigate(-1)
                }}
                message={error?.toString()}
            />
        )
}