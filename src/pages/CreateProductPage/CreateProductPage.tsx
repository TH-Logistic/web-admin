import { useForm, SubmitHandler, UseFormReturn, Controller, ControllerRenderProps, FieldError } from 'react-hook-form';
import { Input } from '../../components/Input/Input';
import CreatePage from '../common/CreatePage/CreatePage';
import * as Form from '@radix-ui/react-form';
import * as RadixSelect from "@radix-ui/react-select";
import ArrowDown from '../../assets/arrow-down.svg';
import ProductType from '../ProductPage/Product/ProductType';
import React from 'react';
import { useMutation } from '@tanstack/react-query';
import * as ProductService from '../../services/product/product-service';
import { useDialog } from '../../hooks/use-dialog';
import { useNavigate } from 'react-router-dom';

type CreateProductPageInputs = {
    productName: string;
    productUnit: string;
    productType: ProductType;
    productBasePrice: number;
}

export default function CreateProductPage() {
    const navigate = useNavigate();
    const createProductMutation = useMutation({
        mutationFn: ProductService.createProduct
    })
    const form = useForm<CreateProductPageInputs>();
    const { showLoadingDialog, hideDialog, showInfoDialog } = useDialog();

    const onSubmit: SubmitHandler<CreateProductPageInputs> = (data) => {
        showLoadingDialog();
        createProductMutation.mutate({
            name: data.productName,
            basePrice: data.productBasePrice,
            unit: data.productUnit,
            types: [ProductType[data.productType.toString() as keyof typeof ProductType]],
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
            header='Create new product'
            title="Add product' s information"
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
    control
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
                        message: 'Must select product type'
                    }
                }}
                render={({ field }) =>
                    <SelectProductType
                        {...field}
                        error={errors.productType}
                        onValueChanged={(value) => setValue('productType', value)}
                    />
                }
            />
        </Form.Root >
    )
}
type SelectProductTypeProps = {
    onValueChanged: (value: ProductType) => void,
    error?: FieldError,
} & ControllerRenderProps<CreateProductPageInputs, 'productType'>
const SelectProductType = React.forwardRef(({
    onValueChanged,
    error,
    ...props
}: SelectProductTypeProps, ref) => {
    return (
        <div className='flex flex-row items-center gap-4'>
            <label htmlFor='product-type' className='basis-1/5'>Product type</label>
            <div className='flex flex-col w-full gap-2'>
                <RadixSelect.Root
                    onValueChange={(value) => onValueChanged(ProductType[value as keyof typeof ProductType])}
                    name='product-type'>
                    <RadixSelect.Trigger
                        className='w-full px-4 py-2 border rounded-md border-border-color' asChild>
                        <div className='flex flex-row items-center justify-between'>
                            <RadixSelect.Value
                                placeholder={
                                    <p className='text-base text-caption'>Product type</p>
                                } />
                            <RadixSelect.Icon asChild>
                                <img src={ArrowDown} alt='Product type' />
                            </RadixSelect.Icon>
                        </div>
                    </RadixSelect.Trigger>

                    <RadixSelect.Portal>
                        <RadixSelect.Content className='overflow-hidden bg-white shadow-lg border border-border-color rounded-md w-[--radix-select-trigger-width] max-h-[30vh]' sideOffset={8} avoidCollisions={false} position='popper'>
                            <RadixSelect.Viewport className='flex flex-col p-2'>
                                {
                                    Object
                                        .keys(ProductType)
                                        .filter(key => isNaN(Number(key)))
                                        .map(key => <SelectItem key={key} value={key} />)
                                }
                            </RadixSelect.Viewport>
                        </RadixSelect.Content>
                    </RadixSelect.Portal>
                </RadixSelect.Root>

                {error?.message && <p className='text-sm text-error-color'>{error.message}</p>}
            </div>
        </div>
    );
})

type SelectItemProps = React.ComponentProps<typeof RadixSelect.Item>;
const SelectItem = ({ value }: SelectItemProps) => {
    return (
        <RadixSelect.Item
            value={ProductType[value as keyof typeof ProductType].toString()}
            className={`data-[highlighted]: outline-none font-semibold data-[highlighted]:bg-disabled-color py-2 px-4 rounded-md text-product-color-${value.toLowerCase()}`}
        >
            <RadixSelect.ItemText >
                {value}
            </RadixSelect.ItemText>
        </RadixSelect.Item>
    )
}