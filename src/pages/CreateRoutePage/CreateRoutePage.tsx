import { useNavigate } from 'react-router-dom';
import CloseIcon from '../../assets/close.svg';
import ActionButton from '../../components/ActionButton/ActionButton';
import LocationIcon from '../../assets/location.svg'
import Select, { components } from 'react-select';

const { Option } = components

export default function CreateRoutePage() {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col h-full pb-4'>
            <div className='flex items-center p-6'>
                <img src={CloseIcon} alt="close" className='w-4 mr-4' onClick={() => navigate(-1)} />
                <p className='text-lg font-semibold'>Create new route</p>
            </div>
            <div className='border-t-[1px] border-border-color' />
            <div className='my-4 mx-14'>
                <p className='font-semibold'>Add route's information</p>

                <form className='flex flex-col gap-4 mt-4'>
                    <div className='flex items-center'>
                        <label htmlFor='from-location' className='mr-4 basis-1/6'>From location</label>
                        <input type='text' name='from-location' className='py-1 px-4 outline-border-color rounded-md border-[1px] flex-1' placeholder='From location' />
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor='to-location' className='mr-4 basis-1/6'>To location</label>
                        <input type='text' name='to-location' className='py-1 px-4 outline-border-color rounded-md border-[1px] flex-1' placeholder='To location' />
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor='trip-based-cost' className='mr-4 basis-1/6'>Trip-based cost</label>
                        <input type='text' name='trip-based-cost' className='py-1 px-4 outline-border-color rounded-md border-[1px] flex-1' placeholder='Trip-based cost' inputMode='numeric' />
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor='ton-based-limit' className='mr-4 basis-1/6'>Ton-based limit</label>

                        <Select
                            components={{
                                Option: (props) =>
                                    <Option {...props}>
                                        <img src={LocationIcon} alt='location' />
                                        {props.data.label}
                                    </Option>
                            }}
                            className='flex-1'
                            placeholder="Ton-based limit"
                            options={[
                                { label: '100,000' },
                                { label: '200,000' }
                            ]} />


                        {/* <select name="ton-based-limit" id='ton-based-cost-product-type' className='py-1 px-4 outline-border-color rounded-md border-[1px] flex-1' placeholder='Product type'>
                            <option value="" disabled selected>
                                <div>
                                    <img src={LocationIcon} alt='location' />
                                    <p>Ton-based limit</p>
                                </div>
                            </option>
                            <option value="100,000">100,000</option>
                            <option value="200,000">200,000</option>
                        </select> */}
                    </div>

                </form>
            </div>

            <div className=' border-border-color border-t-[1px] mt-8' />

            <div className='flex-1'>

            </div>

            <div className='flex justify-end mx-10 mt-4'>
                <ActionButton title='Cancel' primary={false} />
                <ActionButton title='Save' />
            </div>
        </div>
    )
}   