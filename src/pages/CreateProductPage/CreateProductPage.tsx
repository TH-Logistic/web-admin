import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../../components/Input/Input';
import CreatePage from '../common/CreatePage/CreatePage';
import * as Form from '@radix-ui/react-form';
import * as RadixSelect from "@radix-ui/react-select";
import ArrowDown from '../../assets/arrow-down.svg';
import ProductType from '../ProductPage/Product/ProductType';

export default function CreateProductPage() {
    return (
        <CreatePage
            header='Create new product'
            title="Add product' s information"
        >
            <CreateProductForm />
        </CreatePage>
    )
}

type CreateProductPageInputs = {
    productName: string;
    productUnit: string;
    productType: ProductType;
    productBasePrice: string;
}
const CreateProductForm = (props: object) => {
    const { handleSubmit, register, formState: { errors }, setValue } = useForm<CreateProductPageInputs>();

    const onSubmit: SubmitHandler<CreateProductPageInputs> = (data) => {
        console.log(data)
    }
    return (
        <Form.Root className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
            <Input
                placeholder='Product name'
                className='flex flex-row items-center gap-4 '
                {...register('productName')}
                error={errors.productName}
            >
                <Form.Label htmlFor='productName' className='basis-1/5'>Product name</Form.Label>
            </Input>

            {/* <Input
                placeholder='Product unit'
                className='gap-4'
                {...register('productUnit')}
                matchers={[
                    {
                        match: 'valueMissing',
                        message: 'Product unit must not be empty'
                    }
                ]}
            >
                <Form.Label htmlFor='productUnit' className='basis-1/5'>Product unit</Form.Label>
            </Input>

            <Input
                placeholder='Product base price (kg/km)' type='number'
                className='gap-4'
                {...register('productBasePrice')}
                min={0}
                matchers={[
                    {
                        match: 'valueMissing',
                        message: 'Product name must not be empty'
                    },
                    {
                        match: 'typeMismatch',
                        message: 'Product base price must be number'
                    },
                ]}>
                <Form.Label htmlFor='product-base-price' className='basis-1/5'>Product base price</Form.Label>
            </Input> */}

            <SelectProductType onValueChanged={(value) => setValue('productType', value)} />
        </Form.Root >
    )
}
type SelectProductTypeProps = {
    onValueChanged: (value: ProductType) => void
}
const SelectProductType = ({ onValueChanged }: SelectProductTypeProps) => {
    return (
        <div className='flex flex-row items-center gap-4'>
            <label htmlFor='product-type' className='basis-1/5'>Product type</label>
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
        </div>
    );
}

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