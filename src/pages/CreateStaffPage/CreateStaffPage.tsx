import CreatePage from '../common/CreatePage/CreatePage';

export default function CreateStaffPage() {
    return (
        <CreatePage
            header='Create new staff'
            title="Add staff' s information"
        >
            <form className='flex flex-col gap-4'>
                <div className='flex items-center'>
                    <label htmlFor='staff-name' className='mr-4 basis-1/6'>Staff name</label>
                    <input type='text' name='staff-name' className='py-1 px-4 outline-border-color rounded-md border-[1px] flex-1' placeholder='Staff name' />
                </div>
            </form>
        </CreatePage>
    )
}   