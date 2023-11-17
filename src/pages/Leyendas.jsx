import { useState, useEffect } from 'react';
import { URL_API } from '../utils/CONSTANTS';
import Loading from '../components/Loading';
import Error from '../components/Error';
import LegendCard from '../components/legends/LegendCard';
const Leyendas = () => {
	const [legends, setLegends] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetch(`${URL_API}/legends/all`)
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

				setLegends(data);
			})
			.catch((e) => {
				setError(true);
				console.log(e);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading) return <Loading />;

	if (error) return <Error />;

	return (
		<main className="bg-white text-black dark:bg-gray-800 dark:text-white">
			<h1 className="py-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center ">
				Leyendas
			</h1>

			<section className="flex justify-center items-center flex-wrap gap-5 ">
				{legends.map((legend) => (
					<LegendCard key={legend.legend_id} legend={legend} />
				))}
			</section>
		</main>
	);
};

export default Leyendas;

/*
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
weapon_two
 */
