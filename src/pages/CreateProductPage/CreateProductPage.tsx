import { Input } from '../../components/Input/Input';
import CreatePage from '../common/CreatePage/CreatePage';
import * as Form from '@radix-ui/react-form';
import * as RadixSelect from "@radix-ui/react-select";
import ArrowDown from '../../assets/arrow-down.svg';
import ArrowUp from '../../assets/arrow-up.svg';
import ProductType from '../ProductPage/Product/ProductType';

export default function CreateProductPage() {
    return (
        <CreatePage
            header='Create new product'
            title="Add product' s information"
        >
            <CreateProductForm />
            <form className='flex flex-col gap-4'>
                <div className='flex items-center'>
                    <label htmlFor='product-type' className='basis-1/5'>Product Type</label>

                    <select name="product-type" id='create-product-page-product-type' className='py-1 px-4 outline-border-color rounded-md border-[1px] flex-1' placeholder='Product type'>
                        <option value="" disabled selected>Product Type</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                        <option value="type3">Type 3</option>
                        <option value="type4">Type 4</option>
                    </select>
                </div>

            </form>
        </CreatePage>
    )
}

const CreateProductForm = () => {
    return (
        <Form.Root className='flex flex-col gap-4'>
            <Input name='product-name' placeholder='Product name' className='gap-4'>
                <Form.Label htmlFor='product-name' className='basis-1/5'>Product name</Form.Label>
            </Input>

            <Input name='product-unit' placeholder='Product unit' className='gap-4'>
                <Form.Label htmlFor='product-unit' className='basis-1/5'>Product unit</Form.Label>
            </Input>

            <Input name='product-base-price' placeholder='Product base price (kg/km)' type='number' className='gap-4'>
                <Form.Label htmlFor='product-base-price' className='basis-1/5'>Product base price</Form.Label>
            </Input>

            <div className='flex flex-row gap-4'>
                <label htmlFor='product-type' className='basis-1/5'>Product type</label>
                <RadixSelect.Root name='product-type'>
                    <RadixSelect.Trigger className='w-full px-4 py-2 border rounded-md border-border-color' asChild>
                        <div className='flex flex-row items-center justify-between'>
                            <RadixSelect.Value placeholder={
                                <p className='text-base text-caption'>Product type</p>
                            } />
                            <RadixSelect.Icon asChild>
                                <img src={ArrowDown} alt='Product type' />
                            </RadixSelect.Icon>
                        </div>

                    </RadixSelect.Trigger>

                    <RadixSelect.Portal>
                        <RadixSelect.Content className='overflow-hidden bg-red-300 rounded-md' side='left'>
                            <RadixSelect.ScrollUpButton asChild>
                                <img src={ArrowUp} alt='above select' />
                            </RadixSelect.ScrollUpButton>

                            <RadixSelect.Viewport className='p-6'>
                                <RadixSelect.Item value={ProductType.Dangerous.toString()}>
                                    <RadixSelect.ItemText >
                                        Dangerous
                                    </RadixSelect.ItemText>
                                    <RadixSelect.ItemIndicator />
                                </RadixSelect.Item>

                                <RadixSelect.Item value={ProductType.Fragile.toString()}>
                                    <RadixSelect.ItemText >
                                        Fragile
                                    </RadixSelect.ItemText>
                                    <RadixSelect.ItemIndicator />
                                </RadixSelect.Item>

                                <RadixSelect.Item value={ProductType.Machine.toString()}>
                                    <RadixSelect.ItemText >
                                        Machine
                                    </RadixSelect.ItemText>
                                    <RadixSelect.ItemIndicator />
                                </RadixSelect.Item>

                                <RadixSelect.Item value={ProductType.Electronic.toString()}>
                                    <RadixSelect.ItemText >
                                        Electronics
                                    </RadixSelect.ItemText>
                                    <RadixSelect.ItemIndicator />
                                </RadixSelect.Item>


                            </RadixSelect.Viewport>

                            <RadixSelect.ScrollDownButton />

                            <RadixSelect.Arrow />
                        </RadixSelect.Content>
                    </RadixSelect.Portal>
                </RadixSelect.Root>
            </div>

        </Form.Root >
    )
}