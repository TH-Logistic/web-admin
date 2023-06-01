type ActionButtonProps = {
    title: string,
    primary?: boolean,
    onClick?: () => void,
} & React.ComponentProps<'button'>
export default function ActionButton({ title, onClick, primary = true, className, ...props }: ActionButtonProps) {
    return (
        <button
            {...props}
            className={`${className} disabled:bg-disabled-color disabled:text-disabled px-6 py-2 hover:shadow-md font-semibold rounded-md shadow-sm ${primary ? 'bg-button-color' : 'bg-button-color-secondary'} ${primary ? 'text-on-primary' : 'text-on-secondary'} focus:outline-none focus:shadow-md `}
            onClick={onClick}
        >
            {title}
        </button >
    )
}