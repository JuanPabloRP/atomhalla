import { useEffect, useState } from 'react';
import { URL_API } from '../utils/CONSTANTS';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Card from '../components/players/Card';


const BestPlayers = () => {
	const [players, setPlayers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetch(`${URL_API}/utils/ranked1v1?region=all&page=1`)
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
	return (
		<section className="flex justify-center items-center flex-wrap gap-5 ">
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
	);
};

export default BestPlayers;
