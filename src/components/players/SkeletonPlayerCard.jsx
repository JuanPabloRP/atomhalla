const SkeletonPlayerCard = ({ invalidPlayer }) => {
	return (
		<article
			className="max-w-lg w-96 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  animate-pulse"
			role="status"
		>
			<section className="p-5 flex flex-col">
				<header className="mb-2 font-normal text-gray-700 dark:text-gray-400 w-full flex justify-between">
					<span className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-4 mb-4"></span>
					<span className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-20 mb-4"></span>
					<span className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-4 mb-4"></span>
				</header>

				<span className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-14 mb-4"></span>
				<h5
					className={`${
						invalidPlayer
							? 'mb-4 text-2xl font-bold tracking-tight text-red-600 text-center'
							: 'h-2.5 bg-gray-400 rounded-full dark:bg-gray-700 w-52 mb-4'
					}`}
				>
					{invalidPlayer ? 'Jugador no encontrado' : ''}
				</h5>

				{invalidPlayer ? (
					''
				) : (
					<>
						<span className="h-2 bg-gray-400 rounded-full dark:bg-gray-700 w-20 mb-4"></span>
					</>
				)}

        <span className="h-2 bg-gray-400 rounded-full dark:bg-gray-700 w-20 mb-4"></span>
				<span className="h-2 bg-gray-400 rounded-full dark:bg-gray-700 w-36 mb-4"></span>

				<section className="h-3 bg-gray-400 rounded-full dark:bg-gray-700 w-full mb-4"></section>

				<p className="my-2 h-2 bg-gray-400 rounded-full dark:bg-gray-700 w-32 mb-4"></p>

				<button
					className="inline-flex w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					disabled={true}
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
				</button>
			</section>
		</article>
	);
};

export default SkeletonPlayerCard;
