import { useState, useEffect } from 'react';
import SearchInput from '../components/players/SearchInput';
import { URL_API } from '../utils/CONSTANTS';
import Card from '../components/players/Card';
import SkeletonPlayerCard from '../components/players/SkeletonPlayerCard';

const Search = () => {
	const [player, setPlayer] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [validPlayer, setValidPlayer] = useState(false);
	const [inputSearch, setInputSearch] = useState('');

	const { name } = player;

	useEffect(() => {
		if (inputSearch.length === 0) return;
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
			})
			.catch((err) => {
				console.log(err);
				setError(true);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [inputSearch]);

	useEffect(() => {
		if (name) {
			setValidPlayer(true);
		} else {
			setValidPlayer(false);
		}
	}, [name]);

	return (
		<main>
			<SearchInput inputSearch={inputSearch} setInputSearch={setInputSearch} />

			<section className="flex justify-center items-center">
				{loading ? (
					<SkeletonPlayerCard  />
				) : validPlayer ? (
					inputSearch.length > 0 ? (
						<Card player={player} />
					) : (
						<SkeletonPlayerCard  />
					)
				) : (
					<SkeletonPlayerCard invalidPlayer={true} />
				)}
			</section>
		</main>
	);
};

export default Search;
