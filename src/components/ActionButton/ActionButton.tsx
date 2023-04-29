type ActionButtonProps = {
    title: string,
    primary?: boolean
    onClick?: () => void
}
export default function ActionButton({ title, onClick = () => { }, primary = true }: ActionButtonProps) {
    return (
        <button className={`px-6 py-2 rounded-md shadow-sm ${primary ? 'bg-button-color' : 'bg-button-color-secondary'} ${primary ? 'text-on-primary' : 'text-on-secondary'} `} onClick={onClick} >
            {title}
        </button >
    )
}