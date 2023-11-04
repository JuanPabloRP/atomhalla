const Card = ({ player }) => {
	const {
		brawlhalla_id,
		games,
		name,
		peak_rating,
		rank,
		rating,
		region,
		tier,
		wins,
	} = player;

	const regions = {
		Global: '🌎',
		'US-E': '🇺🇸',
		EU: '🇪🇺',
		SEA: 'SEA',
		BRZ: '🇧🇷',
		AUS: '🇦🇺',
		'US-W': '🇺🇸',
		JPN: '🇯🇵',
		SA: 'SA',
		ME: 'ME',
	};

	return (
		<article className="max-w-lg w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700">
			<img
				className="rounded-t-lg"
				src="/docs/images/blog/image-1.jpg"
				alt=""
			/>

			<section className="p-5 flex flex-col">
				<header className="mb-3 font-normal text-gray-700 dark:text-gray-400 w-full flex justify-between">
					<span>#{rank}</span>
					<span>{tier}</span>
					<span>{regions[region]}</span>
				</header>
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{name}
				</h5>
				{/* <span>ID: {brawlhalla_id}</span> */}
				<span>Games {games}</span>
				<span>Wins: {wins}</span>
				<span>Winrate: {((wins / games) * 100).toFixed(2)}%</span>

				<section className="w-full bg-red-600 rounded-full h-2.5 dark:bg-red-600">
					<section
						className="bg-green-600 h-2.5 rounded-full"
						style={{ width: `${(wins / games) * 100}%` }}
					></section>
				</section>

				<p className="my-2">
					<span className="mb-3 text-lg font-bold text-black dark:text-white">
						{rating}
					</span>
					<span className="mb-3 font-normal text-gray-700 dark:text-gray-400">
						/{peak_rating} peak
					</span>
				</p>

				<a
					href="#"
					className="inline-flex w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Ver más
					<svg
						className="w-3.5 h-3.5 ml-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</a>
			</section>
		</article>
	);
};

/*



 */

export default Card;
