import { URL_API } from './CONSTANTS';

export const fetchBestPlayers = async ({ setError, setLoading }) => {
	try {
		const res = await fetch(`${URL_API}/utils/ranked1v1?region=all&page=1`);

		if (!res.ok) {
			throw new Error('La solicitud no fue exitosa.');
		}

		const { data } = await res.json();

		return data;
	} catch (error) {
		console.error('Error en la solicitud:', error);
		setError(true);
		return { error: error.message || 'Error desconocido.' };
	} finally {
		setLoading(false);
	}
};
/* 
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
 */
