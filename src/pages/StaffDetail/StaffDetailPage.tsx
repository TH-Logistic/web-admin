import { useLocation, useParams } from "react-router-dom"
import ProductTypeItem from "../ProductPage/Product/ProductTypeItem";
import Filter from "../../components/Filter/Filter";
import Orders from "../common/Orders/Orders";
import ProductType from "../ProductPage/Product/ProductType";
import DetailHeader from "../../components/Headers/DetailHeader/DetailHeader";
import Divider from "../../components/Divider/Divider";
import StaffStatusItem from "../StaffPage/StaffStatus/StaffStatus";
import { Staff, StaffStatus } from "../../entities/staff";

export default function StaffDetailPage() {
    const { staffId } = useParams();
    const { state } = useLocation();

    const item = state as Staff;
    return (
        <div>
            <DetailHeader header="Staff" id="S01" />
            <Divider />

            <div className="px-8 mt-8">
                <div className="flex flex-row gap-8">
                    <div className="flex flex-col flex-1 gap-4">
                        <p className="font-bold">Staff's Information</p>
                        <div className="flex flex-col gap-4 p-4 border rounded-md border-border-color ">
                            <div className="flex justify-between">
                                <p className="font-semibold text-secondary-dark">Phone number</p>
                                <p>{item.phoneNumber}</p>
                            </div>

                            <div className="flex justify-between">
                                <p className="font-semibold text-secondary-dark">Date of birth</p>
                                <p>{item.birthday}</p>
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

                    <div className="flex flex-col flex-1 gap-4">
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
    )
}