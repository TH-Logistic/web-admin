import { useForm, SubmitHandler, UseFormReturn, Controller } from 'react-hook-form';
import { Input } from '../../components/Input/Input';
import CreatePage from '../common/CreatePage/CreatePage';
import * as Form from '@radix-ui/react-form';
import ProductType, { getProductTypeFromNumber } from '../ProductPage/Product/ProductType';
import { useMutation } from '@tanstack/react-query';
import * as ProductService from '../../services/product/product-service';
import { useDialog } from '../../hooks/use-dialog';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Product from '../../entities/product';
import * as Select from '../../components/Select/Select';

type CreateProductPageInputs = {
    productName: string;
    productUnit: string;
    productType: ProductType;
    productBasePrice: number;
}

export default function CreateProductPage() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state as Product;

    const createProductMutation = useMutation({
        mutationFn: ProductService.createProduct
    });

    const form = useForm<CreateProductPageInputs>({
        defaultValues: product ? {
            productBasePrice: product.basePrice,
            productName: product.name,
            productUnit: product.unit,
            productType: getProductTypeFromNumber(product.types[0]),
        } : undefined
    });
    const { showLoadingDialog, hideDialog, showInfoDialog } = useDialog();

    const onSubmit: SubmitHandler<CreateProductPageInputs> = (data) => {
        showLoadingDialog();
        createProductMutation.mutate({
            name: data.productName,
            basePrice: data.productBasePrice,
            unit: data.productUnit,
            types: [data.productType],
        }, {
            onSuccess: (data) => {
                hideDialog();
                navigate(-1)
            },
            onError: (err) => {
                showInfoDialog({
                    success: false,
                    message: err?.toString(),
                })
            }
        });
    }

    return (
        <CreatePage
            header={productId ? `Update product ${productId}` : `Create new product`}
            title={`${productId ? "Update" : "Add"} product' s information`}
            onPrimaryButtonClicked={() => form.handleSubmit(onSubmit)()
            }
        >
            <CreateProductForm {...form} />
        </CreatePage >
    )
}



const CreateProductForm = ({
    register,
    setValue,
    formState: { errors },
    control,
}: UseFormReturn<CreateProductPageInputs>) => {
    return (
        <Form.Root className='flex flex-col gap-4'>
            <Input
                placeholder='Product name'
                className='flex flex-row items-center gap-4 '
                register={register('productName', {
                    required: {
                        value: true,
                        message: 'Product name can not be empty!'
                    },
                })}
                label='Product name'
                error={errors.productName}
            />

            <Input
                placeholder='Product unit'
                className='gap-4'
                register={register('productUnit', {
                    required: {
                        value: true,
                        message: 'Product unit can not be empty!'
                    }
                })}
                label='Product unit'
                error={errors.productUnit}
            />

            <Input
                placeholder='Product base price (kg/km)' type='number'
                className='gap-4'
                register={register('productBasePrice', {
                    required: {
                        value: true,
                        message: 'Product base price can not be empty!'
                    },
                    min: {
                        value: 10000,
                        message: 'Product base price must larger then 10,000'
                    },
                    valueAsNumber: true
                })}
                error={errors.productBasePrice}
                label='Product base price'
            />

            <Controller
                name='productType'
                control={control}
                rules={{
                    required: {
                        value: true,
                        message: 'Product type must be selected!'
                    }
                }}
                render={({ field }) =>
                    <Select.Root
                        {...field}
                        placeholder='Select product type'
                        label='Product type'
                        error={errors.productType}
                        onValueChanged={(value) => setValue('productType', ProductType[value as keyof typeof ProductType])}
                    >
                        {
                            Object
                                .keys(ProductType)
                                .filter(i => isNaN(Number(i)))
                                .map(value =>
                                    <Select.Item
                                        key={value}
                                        value={value}
                                    />
                                )
                        }
                    </Select.Root>
                }
            />
        </Form.Root >
    )
}