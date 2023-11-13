import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { URL_API } from '../utils/constants';
import Loading from '../components/Loading';
import Error from '../components/Error';
import BackIcon from '../assets/svg/BackIcon';

const Leyenda = () => {
	const [legend, setLegend] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const { id } = useParams();

	const {
		bio_aka,
		bio_name,
		bio_quote,
		bio_quote_about_attrib,
		bio_quote_from,
		bio_quote_from_attrib,
		bio_text,
		bot_name,
		defense,
		dexterity,
		legend_id,
		legend_name_key,
		speed,
		strength,
		thumbnail,
		weapon_one,
		weapon_two,
	} = legend;

	useEffect(() => {
		fetch(`${URL_API}/legends/id?legend_id=${id}}`)
			.then((res) => {
				if (!res.ok) {
					setError(true);
					throw Error('No se pudo conectar con la API');
				}
				return res.json();
			})
			.then((datos) => {
				const { data } = datos;
				console.log(data);

				setLegend(data);
			})
			.catch((e) => {
				setError(true);
				console.log(e);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	const emojis = {
		defense: '🛡️',
		dexterity: '🏹',
		speed: '🏃',
		strength: '💪',
	};

	const armasBrawlhalla = {
		Sword: '🗡️',
		Spear: '🎯',
		Hammer: '🔨',
		Axe: '🪓',
		Katars: '🗡️🗡️',
		Bow: '🏹',
		Blaster: '🔫',
		Whip: '🤺',
		Gauntlets: '🥊',
		Orb: '🔮',
		Bomb: '💣',
		Scythe: '🪓🏮',
		Fists: '👊',
		Lance: '🔱',
		Katar: '⚔',
		Pistol: '🔫',
		RocketLance: '🚀',
		Cannon: '🧨',
		Default: '❓',
	};

	if (loading) return <Loading />;

	if (error) return <Error />;

	return (
		<main className="flex py-10 flex-col justify-center items-center max-w-5xl mx-auto">
			<Link to={'/legends'}>
				<BackIcon width={42} height={42} />
			</Link>

			<section className="flex py-10 flex-col justify-center items-center">
				<header className="w-full flex flex-col md:flex-row md:justify-evenly justify-center items-center bg-gray-300 dark:bg-gray-700 py-10">
					<img
						className=" mb-3 rounded-full shadow-lg"
						src={thumbnail}
						alt={'Imagen de ' + bio_name}
					/>
					<section className="flex flex-col flex-wrap justify-center items-center">
						<h5 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
							{bio_name}
						</h5>
						<span className="text-sm text-gray-500 dark:text-gray-400 pb-3">
							{bio_aka}
						</span>

						<section className="my-3">
							<article className="flex gap-4">
								<span>
									{armasBrawlhalla[weapon_one] || armasBrawlhalla['Default']}
									{weapon_one}
								</span>
								<span>
									{armasBrawlhalla[weapon_two] || armasBrawlhalla['Default']}
									{weapon_two}
								</span>
							</article>
						</section>

						<article className=" flex flex-col justify-center ">
							<span>
								{emojis.defense}Defensa {defense}
							</span>
							<span>
								{emojis.dexterity}Destreza {dexterity}
							</span>
							<span>
								{emojis.speed}Velocidad {speed}
							</span>
							<span>
								{emojis.strength}Fuerza {strength}
							</span>
						</article>
					</section>
				</header>

				<main className="flex flex-col gap-12  py-4 px-2 max-w-4xl mx-auto">
					<article className="">
						<p className="italic">{bio_quote}</p>
						<span>{bio_quote_about_attrib}</span>
					</article>

					<article>
						<h2></h2>
						<p>{bio_text}</p>
					</article>

					<article className="">
						<p className="italic">{bio_quote_from}</p>
						<span>{bio_quote_about_attrib}</span>
					</article>
				</main>
			</section>
		</main>
	);
};

export default Leyenda;
