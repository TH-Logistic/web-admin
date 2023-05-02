import CreatePage from '../common/CreatePage/CreatePage';

export default function CreateTransportationPage() {
    return (
        <CreatePage
            header='Create new truck'
            title="Add truck' s information"
        >
            <form className='flex flex-col gap-4'>
                <div className='flex items-center'>
                    <label htmlFor='truck-name' className='mr-4 basis-1/6'>Truck name</label>
                    <input type='text' name='truck-name' className='py-1 px-4 outline-border-color rounded-md border-[1px] flex-1' placeholder='Truck name' />
                </div>
            </form>
        </CreatePage>
    )
}   