import CreatePage from '../common/CreatePage/CreatePage';

export default function CreateDriverPage() {
    return (
        <CreatePage
            header='Create new driver'
            title="Add driver' s information"
        >
            <form className='flex flex-col gap-4'>
                <div className='flex items-center'>
                    <label htmlFor='driver-name' className='mr-4 basis-1/6'>Driver name</label>
                    <input type='text' name='driver-name' className='py-1 px-4 outline-border-color rounded-md border-[1px] flex-1' placeholder='Driver name' />
                </div>
            </form>
        </CreatePage>
    )
}   