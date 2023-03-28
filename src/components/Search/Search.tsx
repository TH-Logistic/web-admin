import SearchIcon from '../../assets/search.svg'

export default function Search() {
    return (
        <div className="flex flex-row justify-between flex-1 mr-8 border rounded-md border-border-color">
            <input
                type="text"
                placeholder="Search by names, product type,..."
                className='w-full m-4 outline-none focus:outline-none'
            />
            <img src={SearchIcon} alt='Search' className='pr-4' />
        </div>
    )
}
