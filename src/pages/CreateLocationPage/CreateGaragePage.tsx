import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import * as GarageService from '../../services/garage/garage-service';
import { useDialog } from "../../hooks/use-dialog";
import { useNavigate } from "react-router-dom";
import BaseCreateLocationPage, { CreateLocationPageInputs } from "./BaseCreateLocationPage";

const CreateGaragePage = () => {


    const { showLoadingDialog, hideDialog, showInfoDialog } = useDialog();
    const navigate = useNavigate();
    const createGargeMutate = useMutation({
        mutationFn: GarageService.createGarage
    })

    const onSubmit = (data: CreateLocationPageInputs) => {
        showLoadingDialog()

        createGargeMutate.mutate({
            address: data.address,
            name: data.name,
            latitude: data.location.lat,
            longitude: data.location.lng
        }, {
            onSuccess: () => {
                hideDialog();
                navigate(-1);
            },
            onError: (err) => {
                console.log(err)
                showInfoDialog({
                    success: false,
                    message: err?.toString()
                })
            }
        })
    }
    return <BaseCreateLocationPage
        onCreateLocation={onSubmit}
        header="Create new garage"
        title="Add garage's information"
    />
}

export default CreateGaragePage;