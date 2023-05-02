import CreatePage from '../common/CreatePage/CreatePage';

export default function CreateOrganizationPage() {
    return (
        <CreatePage
            header='Create new organization'
            title="Add organization' s information"
        >
            <form className='flex flex-col gap-4'>
                <div className='flex items-center'>
                    <label htmlFor='organization-name' className='mr-4 basis-1/6'>Organization name</label>
                    <input type='text' name='organization-name' className='py-1 px-4 outline-border-color rounded-md border-[1px] flex-1' placeholder='Organization name' />
                </div>
            </form>
        </CreatePage>
    )
}   