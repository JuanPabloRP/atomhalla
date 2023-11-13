import { useState } from 'react';
import Search from './players/SearchInput';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const links = [
		{
			name: 'Inicio',
			href: '/',
		},
		{
			name: 'Jugadores',
			href: '/players',
		},
		{
			name: 'Comparar',
			href: '/vs',
		},
		{
			name: 'Leyendas',
			href: '/legends',
		},
	];

	const handleOpen = () => setNavbarOpen(!navbarOpen);

	return (
		<nav className="bg-white border-gray-200 dark:bg-gray-900">
			<section className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<section className="flex">
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						AtomHalla
					</span>
				</section>

				<button
					data-collapse-toggle="navbar-default"
					type="button"
					onClick={handleOpen}
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded="false"
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>

				<section
					className={`${
						navbarOpen ? 'block' : 'hidden'
					} w-full md:block md:w-auto`}
					id="navbar-default"
				>
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						{links.map(({ name, href }) => (
							<li key={name}>
								<NavLink
									to={href}
									className={({ isActive }) =>
										`block py-2 pl-3 pr-4 rounded md:p-0 ${
											isActive
												? ' text-white bg-blue-700  md:bg-transparent md:text-blue-700 md:dark:text-blue-500 '
												: ' text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
										} `
									}
								>
									{name}
								</NavLink>
							</li>
						))}
					</ul>
				</section>
			</section>
		</nav>
	);
};

export default Navbar;
/*
<section
					className={`${
						navbarOpen ? 'block' : 'hidden'
					} w-full md:block md:w-auto my-2 relative flex`}
				>
					<Search />
				</section>
*/

/*
<div className="relative z-0 w-full mb-6 group">
	<input
		type="tel"
		pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
		name="floating_phone"
		id="floating_phone"
		className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
		placeholder=" "
		required
	/>
	<label
		htmlFor="floating_phone"
		className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
	>
		Buscar jugador
	</label>
</div>
*/

/*
	
	<button
		type="submit"
		className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
	>
		Search
	</button>
*/
