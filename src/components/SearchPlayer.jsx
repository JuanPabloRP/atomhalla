import { useEffect, useState } from 'react';
import { URL_API } from '../utils/CONSTANTS';
import SkeletonPlayerCard from './players/SkeletonPlayerCard';
import SearchInput from './players/SearchInput';
import Card from './players/Card';
import Error from './Error';
import { toast } from 'react-toastify';

const SearchPlayer = ({
	inputSearch,
	setInputSearch,
	validPlayer,
	setValidPlayer,
	player,
	setPlayer,
}) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const handleSearch = (e) => {
		e.preventDefault();
		const id = e.target[0].value;

		if (id.length === 0) return;

		fetch(`${URL_API}/ranked/id?brawlhalla_id=${inputSearch}`)
			.then((res) => {
				if (!res.ok) {
					setError(true);
					throw new Error('Error en la petición');
				}

				return res.json();
			})
			.then(({ data }) => {
				setPlayer(data);
				console.log(data);

				if (!data.name) return toast.error('Jugador no encontrado');

				toast.success('Jugador encontrado');
			})
			.catch((err) => {
				console.log(err);
				toast.error('Jugador no encontrado');
				setError(true);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		if (player.name) {
			setValidPlayer(true);
		} else {
			setValidPlayer(false);
		}
	}, [player.name]);

	return (
		<main>
			<SearchInput
				inputSearch={inputSearch}
				setInputSearch={setInputSearch}
				handleSearch={handleSearch}
			/>

			<section className="flex justify-center items-center">
				{loading ? (
					<SkeletonPlayerCard />
				) : validPlayer ? (
					inputSearch.length > 0 ? (
						<Card player={player} />
					) : (
						<SkeletonPlayerCard />
					)
				) : (
					<SkeletonPlayerCard invalidPlayer={true} />
				)}
			</section>
		</main>
	);
};

export default SearchPlayer;
