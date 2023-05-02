import Divider from "../../components/Divider/Divider"
import CreatePage from "../common/CreatePage/CreatePage"

const CreateLocationPage = () => {
    return (
        <CreatePage
            header="Create new location"
            title="Add location's information"
            divider={false}
        >
            <div className="flex flex-col gap-8">
                <form className='flex flex-col gap-4'>
                    <div className='flex items-center'>
                        <label htmlFor='to-location-name' className='mr-4 basis-1/6'>Location name</label>
                        <input type='text' name='to-location-name' className='py-1 px-4 outline-border-color rounded-md border-[1px] flex-1' placeholder='To location name' />
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor='to-location-address' className='mr-4 basis-1/6'>Address</label>
                        <input type='text' name='to-location-address' className='py-1 px-4 outline-border-color rounded-md border-[1px] flex-1' placeholder='To location' />
                    </div>
                </form>
                <Divider />
                <p>Preview</p>
            </div>
        </CreatePage>
    )
}

export default CreateLocationPage