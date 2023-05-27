import Divider from '../../Divider/Divider';

type ContentHeaderProps = React.PropsWithChildren<{
    centerItems: boolean;
}>

/**
 * Base header for pages used in the web
 */
export default function BaseHeader({ children, centerItems = true }: ContentHeaderProps) {
    return (
        <div className='flex flex-col'>
            <div className={`flex flex-row ${centerItems ? 'items-center' : 'items-start'} gap-6 p-8`}>
                {children}
            </div>

            <Divider />
        </div>
    )
}