import * as Form from "@radix-ui/react-form";

interface InputMatchers {
    /**
     * Input matcher
     */
    match: Form.ValidityMatcher | Form.CustomMatcher;

    /**
     * Message to show when input does not match
     */
    message: string;
}

interface InputPropsInterface {
    /**
     * Input name
     */
    name: string;

    /**
     * Matchers, include match & message for validation
     */
    matchers?: InputMatchers[];
}

export type InputProps = InputPropsInterface &
    React.ComponentPropsWithoutRef<"input">;

/**
 * Component for taking user input
 */
export const Input = ({
    matchers = undefined,
    children = undefined,
    name,
    className,
    ...props
}: InputProps) => {
    return (
        <Form.Field name={name} className="flex flex-col w-full gap-4">
            <Form.Control {...props} className={`px-4 py-2 outline-none border border-border-color rounded-md [&:data-invalid]:border-error-color ${className}`}  {...props} />

            {matchers && (
                <div data-testid="matcher-message">
                    {matchers.map((matcher) => (
                        <Form.Message
                            key={matcher.match.toString()}
                            match={matcher.match}
                            className="m-0 text-error-color"
                        >
                            {matcher.message}
                        </Form.Message>
                    ))}
                </div>
            )}

            {children}
        </Form.Field>
    );
};
