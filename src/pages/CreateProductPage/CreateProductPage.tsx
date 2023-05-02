import CreatePage from '../common/CreatePage/CreatePage';

export default function CreateProductPage() {
    return (
        <CreatePage
            header='Create new product'
            title="Add product' s information"
        >
            <form className='flex flex-col gap-4'>
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
        </CreatePage>
    )
}   