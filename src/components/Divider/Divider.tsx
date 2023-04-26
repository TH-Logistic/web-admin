type DividerProps = React.ComponentProps<'div'> & {
    horizontal?: boolean
}
export default function Divider({ horizontal = true }: DividerProps) {
    return (
        <div className={`${horizontal ? 'border-t-[1px]' : 'border-l-[1px]'} border-border-color`} />
    )
}