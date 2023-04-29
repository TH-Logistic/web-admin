import { useNavigate } from 'react-router-dom';
import ActionButton from '../../components/ActionButton/ActionButton';
import LocationIcon from '../../assets/location.svg'
import Select, { components } from 'react-select';
import Divider from '../../components/Divider/Divider';
import CreateHeader from '../../components/Headers/CreateHeader/CreateHeader';
import LottieNoMapPreview from '../../assets/lottie_no_map_preview.json';
import LottiePlayer from 'lottie-react';

const { Option } = components

export default function CreateRoutePage() {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col h-full pb-4'>
            <CreateHeader header='Create new route' />

            <div className='flex flex-col pb-8 my-4 mx-14'>
                <p className='font-semibold'>Add route's information</p>
                <div className='h-8' />

                <form className='flex flex-col gap-4'>
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
                            className='flex-1 bg-none'
                            placeholder="Ton-based limit"
                            options={[
                                { label: '100,000' },
                                { label: '200,000' }
                            ]}
                        />
                    </div>
                </form>

                <Divider className='my-8' />

                <p className='m-0 font-semibold'>Preview</p>

                <div className='self-center mt-4'>
                    <MapComponent />
                </div>

                <div className='flex justify-end gap-4'>
                    <ActionButton title='Cancel' primary={false} onClick={() => navigate(-1)} />
                    <ActionButton title='Save' />
                </div>
            </div>


        </div>
    )
}

const MapComponent = () => {
    return <LottiePlayer animationData={LottieNoMapPreview} loop />
}