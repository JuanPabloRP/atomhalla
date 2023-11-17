import Card from '../components/players/Card';
import { useState, useEffect } from 'react';
import { URL_API } from '../utils/CONSTANTS';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Search from '../components/players/SearchInput';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Jugadores = () => {
	const routes = [
		{
			path: '/players/best',
			text: 'Mejores jugadores',
		},
		{
			path: '/players/search',
			text: 'Buscar jugador',
		},
	];

	return (
		<main className="flex flex-col min-h-screen dark:bg-gray-800">
			<h1 className="my-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white  text-center ">
				Jugadores
			</h1>

			<section className="border-b border-gray-200 dark:border-gray-700 mb-10 ">
				<ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 justify-center ">
					{routes.map(({ path, text }) => (
						<li key={text} className="me-2">
							<NavLink
								to={path}
								className={({ isActive }) =>
									`inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg ${
										isActive
											? 'text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500'
											: 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
									} `
								}
							>
								{text}
							</NavLink>
						</li>
					))}
				</ul>
			</section>

			<Outlet />
		</main>
	);
};

export default Jugadores;
/* 
<li className="me-2">
						<NavLink
							href="#"
							className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
						>
							<svg
								className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
							</svg>
							<span>Jugadores</span>
						</NavLink>
					</li>
					<li className="me-2">
						<a
							href="#"
							className="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group"
							aria-current="page"
						>
							<svg
								className="w-4 h-4 me-2 text-blue-600 dark:text-blue-500"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								viewBox="0 0 18 18"
							>
								<path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
							</svg>
							<span>Buscar</span>
						</a>
					</li>
*/

/*
	<form className="max-w-lg">
				<label
					htmlFor="search"
					className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
				>
					Search
				</label>
				<div className="relative">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							className="w-4 h-4 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						type="search"
						id="search"
						className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder="Search"
						required
					/>
					<button
						type="submit"
						className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Search
					</button>
				</div>
			</form>
*/

/*
	//utils/rankedseasonal?region=all&page=1
	useEffect(() => {
		fetch(`${URL_API}utils/ranked1v1?region=all&page=1`)
			.then((res) => {
				if (!res.ok) {
					setError(true);
					throw Error;
				}

				return res.json();
			})
			.then((datos) => {
				const { data } = datos;
				//console.log(data);
				setPlayers(data);
			})
			.catch((err) => {
				console.log(err);
				setError(true);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [inputSearch]);

*/

/*

	const [page, setPage] = useState(2);



useEffect(() => {
    const fecthData = async () => {
			try {
				const res = await fetch(
					`${URL_API}utils/ranked1v1?region=all&page=${page}`
				);
				const newData = await res.json();

				if (newData.length > 0) {
					setPlayers(prevPlayers => [...prevPlayers, ...newData]);
					setPage(prevPage => prevPage + 1);
				}
			} catch (err) {
				console.log(err);
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		const handleScroll = () => {
			const { scrollTop, clientHeight, scrollHeight } = containerRef.current;

			if (scrollTop + clientHeight >= scrollHeight - 10) {
				fecthData();
			}
		};

		containerRef.current?.addEventListener('scroll', handleScroll);
		return () => {
			containerRef.current?.removeEventListener('scroll', handleScroll);
		};
	}, [players]);

 */
