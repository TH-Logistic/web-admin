import SearchIcon from '../../assets/search.svg'

export type SearchProps = React.PropsWithoutRef<{
    placeholder: string
}>;

export default function Search({
    placeholder,
}: SearchProps) {
    return (
        <div className="flex flex-row justify-between flex-1 border rounded-md border-border-color">
            <input
                type="text"
                placeholder={placeholder}
                className='w-full m-4 outline-none focus:outline-none'
            />
            <img src={SearchIcon} alt='Search' className='pr-4' />
        </div>
    )
}
