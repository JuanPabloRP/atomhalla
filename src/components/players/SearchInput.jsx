import { Link } from 'react-router-dom';

const SearchInput = ({ inputSearch, setInputSearch }) => {
	const handleInputSearch = (e) => {
		setInputSearch(e.target.value);
	};
	return (
		<section className="flex justify-center items-center flex-wrap my-4 gap-2">
			<input
				type="search"
				id="search"
				className="mx-auto md:mx-0 w-full block max-w-lg p-2 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Buscar jugador por ID"
				onChange={handleInputSearch}
				required
			/>
			{/* <Link
				to={`/players/${1}`}
				className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
			>
				<span className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
					Buscar
				</span>
			</Link> */}
		</section>
	);
};

export default SearchInput;
