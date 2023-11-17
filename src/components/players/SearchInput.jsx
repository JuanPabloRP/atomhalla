import { Link } from 'react-router-dom';

const SearchInput = ({ inputSearch, setInputSearch, handleSearch }) => {
	const handleInputSearch = (e) => {
		setInputSearch(e.target.value);
	};

	return (
		<form
			className="flex justify-center items-center flex-wrap my-4 gap-2"
			onSubmit={(e) => handleSearch(e)}
		>
			<input
				type="search"
				id="search"
				className="mx-auto md:mx-0 w-80 block max-w-lg p-2 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Buscar jugador por ID ej: 8851646 ó 3"
				onChange={handleInputSearch}
				required
			/>
			<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
				Buscar
			</button>
		</form>
	);
};

export default SearchInput;
