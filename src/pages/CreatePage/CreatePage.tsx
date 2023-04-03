import CloseIcon from '../../assets/close.svg';

export default function CreatePage() {
    return (
        <div>
            <div className='flex items-center p-6'>
                <img src={CloseIcon} alt="close" className='mr-4 w-4' />
                <p className='font-semibold text-lg'>Create new product</p>
            </div>
            <div className='border-t-[1px] border-border-color' />
            <div className='mx-14 my-4'>
                <p className='font-semibold'>Add product's information</p>

                <form className='mt-4'>
                    <div className='flex items-center'>
                        <label htmlFor='product-name' className='mr-4'>Product name</label>
                        <input type='text' name='product-name' className='outline-1 p-1 px-4 outline-border-color rounded-md border-[1px] flex-1' />
                    </div>
                </form>
            </div>
        </div>
    )
}   