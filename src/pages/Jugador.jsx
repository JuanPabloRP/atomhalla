import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { URL_API } from '../utils/CONSTANTS';
import BackIcon from '../assets/svg/BackIcon';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Jugador = () => {
	const [player, setPlayer] = useState({});
	const [clan, setClan] = useState({});
	const [legends, setLegends] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const { id } = useParams();

	const {
		name,
		brawlhalla_id,
		games,
		wins,
		level,
		xp,
		damagebomb,
		damagemine,
		damagesidekick,
		damagespikeball,
		kobomb,
		komine,
		kosidekick,
		kosnowball,
		kospikeball,
	} = player;

	const { clan_id, clan_name, clan_xp, personal_xp } = clan;

	useEffect(() => {
		fetch(`${URL_API}/stats/id?brawlhalla_id=${id}`)
			.then((res) => {
				if (!res.ok) {
					setError(true);
					throw new Error('Error en la petición');
				}

				return res.json();
			})
			.then(({ data }) => {
				setPlayer(data);
				setClan(data.clan);
				setLegends(data.legends);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
				setError(true);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [id]);

	if (error)
		return <Error message={'Error al obtener la información del jugador'} />;

	if (loading) return <Loading />;

	return (
		<section className="max-w-5xl mx-auto flex flex-col justify-center items-center">
			<Link to={'/players'}>
				<BackIcon width={42} height={42} />
			</Link>
			<section className="p-5 flex flex-col">
				<header className="flex flex-col justify-center items-center">
					<span className="font-light text-xs text-gray-400 dark:text-gray-500">
						ID: {brawlhalla_id}
					</span>
					<h2 className=" text-5xl font-bold tracking-tight text-gray-900 dark:text-white flex flex-wrap  items-baseline gap-4 uppercase text-center mb-4">
						{name}
					</h2>
				</header>

				<main className="">
					<h3 className="text-2xl mb-3 font-semibold text-center">
						Estadisticas personales
					</h3>

					<article className="flex flex-col ">
						<p className=" font-bold">Nivel: 💥{level}💥</p>
						<p>
							<span>XP: </span>
							<span className="text-yellow-400 font-bold">{xp}☢</span>
						</p>
						<span>Games: {games}</span>
						<span>Wins: {wins}</span>
						<span>Winrate: {((wins / games) * 100).toFixed(2)}%</span>
						<section className="w-full bg-red-600 rounded-full h-2.5 dark:bg-red-600">
							<article
								className="bg-green-600 h-2.5 rounded-full"
								style={{ width: `${(wins / games) * 100}%` }}
							></article>
						</section>
					</article>

					<section className="flex flex-col md:flex-row justify-around gap-20 my-5">
						<article>
							<h3 className="text-center text-xl mb-3 font-semibold ">
								Daño Ocasionado por
							</h3>
							<section className="flex justify-between gap-4">
								<article>
									<p>💣bomb </p>
									<p>⚠mine </p>
									<p>💢sidekick </p>
									<p>🔆spikeball </p>
								</article>
								<article>
									<p>{damagebomb}</p>
									<p>{damagemine}</p>
									<p>{damagesidekick}</p>
									<p>{damagespikeball}</p>
								</article>
							</section>
						</article>

						<article>
							<h3 className="text-center text-xl mb-3 font-semibold ">
								{"KO's hechos por"}
							</h3>
							<section className="flex justify-between gap-4">
								<article>
									<p>💣bomb </p>
									<p>⚠mine </p>
									<p>💢sidekick </p>
									<p>🔆spikeball </p>
									<p>❄snowball </p>
								</article>
								<article>
									<p>{kobomb}</p>
									<p>{komine}</p>
									<p>{kosidekick}</p>
									<p> {kospikeball}</p>
									<p>{kosnowball}</p>
								</article>
							</section>
						</article>
					</section>

					<section className="my-5">
						<h3 className="text-center text-xl mb-3 font-semibold ">
							🛡Información clan🛡
						</h3>
						<section>
							<p className="font-light text-xs text-gray-400 dark:text-gray-500 text-center">
								ID {clan_id}
							</p>
							<h4 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white    gap-4 uppercase text-center mb-2">
								{clan_name}
							</h4>
							<p className="flex flex-col items-center md:flex-row md:justify-around">
								<span>🏆XP Clan {clan_xp}🏆</span>
								<span>🌟XP Personal {personal_xp}🌟</span>
							</p>
						</section>
					</section>

					{/* <section>
						<h3>Leyendas utilizadas</h3>
					</section> */}
				</main>
			</section>
		</section>
	);
};

export default Jugador;

/*
damagedealt: '455512';
damagegadgets: '741';
damagetaken: '340803';
damagethrownitem: '4547';
damageunarmed: '33713';
damageweaponone: '200861';
damageweapontwo: '211858';
falls: 1681;
games: 940;
kogadgets: 4;
kos: 2369;
kothrownitem: 117;
kounarmed: 231;
koweaponone: 901;
koweapontwo: 1107;
legend_id: 31;
legend_name_key: 'ragnir';
level: 35;
matchtime: 148137;
suicides: 122;
teamkos: 32;
timeheldweaponone: 59811;
timeheldweapontwo: 58114;
wins: 687;
xp: 94572;
xp_percentage: 0.1681681681681;
*/
