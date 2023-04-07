import { useNavigate } from 'react-router-dom';
import CloseIcon from '../../assets/close.svg';
import ActionButton from '../../components/ActionButton/ActionButton';

export default function CreateProductPage() {
    const navigate = useNavigate()
    return (
        <div>
            <div className='flex items-center p-6'>
                <img src={CloseIcon} alt="close" className='w-4 mr-4' onClick={() => navigate(-1)} />
                <p className='text-lg font-semibold'>Create new product</p>
            </div>
            <div className='border-t-[1px] border-border-color' />
            <div className='my-4 mx-14'>
                <p className='font-semibold'>Add product's information</p>

                <form className='flex flex-col gap-4 mt-4'>
                    <div className='flex items-center'>
                        <label htmlFor='product-name' className='mr-4 basis-1/6'>Product name</label>
                        <input type='text' name='product-name' className='py-1 px-4 outline-border-color rounded-md border-[1px] flex-1' placeholder='Product name' />
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor='product-unit' className='mr-4 basis-1/6'>Unit</label>
                        <input type='text' name='product-unit' className='py-1 px-4 outline-border-color rounded-md border-[1px] flex-1' placeholder='Unit' />
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor='product-base-price' className='mr-4 basis-1/6'>Base Price</label>
                        <input type='text' name='product-base-price' className='py-1 px-4 outline-border-color rounded-md border-[1px] flex-1' placeholder='Base price (kg/km)' inputMode='numeric' />
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor='product-type' className='mr-4 basis-1/6'>Product Type</label>

                        <select name="product-type" id='create-product-page-product-type' className='py-1 px-4 outline-border-color rounded-md border-[1px] flex-1' placeholder='Product type'>
                            <option value="" disabled selected>Product Type</option>
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>
                            <option value="type3">Type 3</option>
                            <option value="type4">Type 4</option>
                        </select>
                    </div>

                </form>
            </div>

            <div className=' border-border-color border-t-[1px] mt-8' />

            <div className='flex justify-end mx-10 mt-4'>
                <ActionButton title='Cancel' primary={false} />
                <ActionButton title='Save' />
            </div>
        </div>
    )
}   