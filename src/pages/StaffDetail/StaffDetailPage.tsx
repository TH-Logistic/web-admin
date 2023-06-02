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

export default function StaffDetailPage() {
    const { staffId } = useParams();
    const navigate = useNavigate();

    const { data: staff, error, isLoading } = useQuery({
        queryKey: ['getStaffById', staffId],
        queryFn: staffId ? () => StaffService.getStaffById(staffId) : undefined
    });

    if (!staffId) {
        return <Navigate to={ROUTES.STAFFS} />
    }

    if (isLoading) {
        return <LoadingDialog open />
    }
    return staff ?
        (
            <div>
                <DetailHeader header="Staff" id={staffId} />

                <div className="px-8 mt-8">
                    <div className="flex flex-row items-stretch gap-8">
                        <div className="flex flex-col justify-end flex-1 gap-4">
                            <p className="font-bold">Staff's Information</p>
                            <div className="flex flex-col gap-4 p-4 border rounded-md border-border-color ">
                                <div className="flex justify-between">
                                    <p className="font-semibold text-secondary-dark">Phone number</p>
                                    <p>{staff.phoneNumber}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold text-secondary-dark">Date of birth</p>
                                    <p>{millisecondToString(staff.birthday)}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold text-secondary-dark">Joined date</p>
                                    <p>23/02/2023</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold text-secondary-dark">Bank name</p>
                                    <p>{staff.bankName}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold text-secondary-dark">Bank account</p>
                                    <p>{staff.bankAccount}</p>
                                </div>

                                <div className="flex justify-between">
                                    <p className="font-semibold text-secondary-dark">Status</p>
                                    <StaffStatusItem status={staff.status} />
                                </div>

                            </div>
                        </div>

                        <div className="flex flex-col flex-1">
                            <div className="flex items-center justify-center flex-1">
                                <img src={staff.gender === Gender.MALE ? MaleAvatar : FeMaleAvatar} alt="Avatar" className="w-32 h-32 rounded-full outline outline-border-color" />
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