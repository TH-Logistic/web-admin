import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import * as LocationService from '../../services/location/location-service';
import { useDialog } from "../../hooks/use-dialog";
import { useNavigate } from "react-router-dom";
import BaseCreateLocationPage, { CreateLocationPageInputs } from "./BaseCreateLocationPage";

const CreateLocationPage = () => {


    const { showLoadingDialog, hideDialog, showInfoDialog } = useDialog();
    const navigate = useNavigate();
    const createLocationMutate = useMutation({
        mutationFn: LocationService.createLocation
    })

    const onSubmit = (data: CreateLocationPageInputs) => {
        showLoadingDialog()

        createLocationMutate.mutate({
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
        header="Create new location"
        title="Add new location's information"
    />
}

export default CreateLocationPage;