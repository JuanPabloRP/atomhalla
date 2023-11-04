import Card from '../components/players/Card';
import { useState, useEffect } from 'react';
import { URL_API } from '../utils/CONSTANTS';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Jugadores = () => {
	const [players, setPlayers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	
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
	}, []);
	

	if (loading) return <Loading />;

	if (error) return <Error />;

  console.log(players);
	return (
		<main className="flex flex-col ">
			<h1 className="my-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center ">
				Mejores Jugadores
			</h1>

			<section className="flex justify-center items-center flex-wrap gap-5 " ref={containerRef}>
				{players ? (
					players.map((player) => (
						<>
							<Card key={player.brawlhalla_id} player={player} />
						</>
					))
				) : (
					<p>No hay Jugadores</p>
				)}
			</section>

      
		</main>
	);
};

export default Jugadores;
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