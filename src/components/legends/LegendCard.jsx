import { Link } from 'react-router-dom';

const LegendCard = ({ legend }) => {
	const { bio_aka, bio_name, legend_id, thumbnail } = legend;

	return (
		<article
			
			className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center py-10"
		>
			<img
				className="w-24 h-24 mb-3 rounded-full shadow-lg"
				src={thumbnail}
				alt={"Imagen de " + bio_name}
			/>
			<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
				{bio_name}
			</h5>
			<span className="text-sm text-gray-500 dark:text-gray-400">
				{bio_aka}
			</span>
			<footer className="flex mt-4 space-x-3 md:mt-6">
				<Link
					to={`/legends/${legend_id}`}
					className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Ver biografía
				</Link>
			</footer>
		</article>
	);
};

export default LegendCard;
