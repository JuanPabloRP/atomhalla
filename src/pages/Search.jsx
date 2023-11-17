import { useState, useEffect } from 'react';
import SearchInput from '../components/players/SearchInput';
import { URL_API } from '../utils/CONSTANTS';
import Card from '../components/players/Card';
import SkeletonPlayerCard from '../components/players/SkeletonPlayerCard';
import Error from '../components/Error';
import SearchPlayer from '../components/SearchPlayer';

const Search = () => {
	const [inputSearch, setInputSearch] = useState('');
	const [validPlayer, setValidPlayer] = useState(false);
	const [player, setPlayer] = useState({});

	return (
		<main>
			<SearchPlayer
				inputSearch={inputSearch}
				setInputSearch={setInputSearch}
				validPlayer={validPlayer}
				setValidPlayer={setValidPlayer}
				player={player}
				setPlayer={setPlayer}
			/>
		</main>
	);
};

export default Search;
