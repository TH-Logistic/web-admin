type TypographyVariant = "regular" | "caption" | "title" | "subtitle"

type TypographyProps = React.ComponentProps<'p'> & {
    variant: TypographyVariant;
}

export const Typography = (props: TypographyProps) => {
    return (
        <div>

        </div>
    )
}