import Divider from '../../Divider/Divider';

type ContentHeaderProps = React.PropsWithChildren<object>

/**
 * Base header for pages used in the web
 */
export default function BaseHeader({ children }: ContentHeaderProps) {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row items-center gap-6 p-8'>
                {children}
            </div>

            <Divider />
        </div>
    )
}