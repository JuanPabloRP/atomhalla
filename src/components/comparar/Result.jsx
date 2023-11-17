const Result = ({ firstPlayerInfo, secondPlayerInfo }) => {
	console.log({ firstPlayerInfo, secondPlayerInfo });

	return (
		<main className="pb-10">
			<section className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
								Estadisticas
							</th>
							<th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
								{firstPlayerInfo.name}
							</th>
							<th scope="col" className="px-6 py-3">
								VS
							</th>
							<th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
								{secondPlayerInfo.name}
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b border-gray-200 dark:border-gray-700">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
							>
								Games
							</th>
							<td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
								{firstPlayerInfo.games}
							</td>
							<td>
								<Comparacion
									option="games"
									firstPlayerInfo={firstPlayerInfo}
									secondPlayerInfo={secondPlayerInfo}
								/>
							</td>
							<td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
								{secondPlayerInfo.games}
							</td>
						</tr>

						<tr className="border-b border-gray-200 dark:border-gray-700">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
							>
								Victorias
							</th>
							<td className="px-6 py-4">{firstPlayerInfo.wins}</td>
							<td>
								<Comparacion
									option="wins"
									firstPlayerInfo={firstPlayerInfo}
									secondPlayerInfo={secondPlayerInfo}
								/>
							</td>
							<td className="px-6 py-4">{firstPlayerInfo.wins}</td>
						</tr>

						{/* <tr className="border-b border-gray-200 dark:border-gray-700">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
							>
								Ratio victorias
							</th>
							<td className="px-6 py-4">
								{firstPlayerInfo.wins / firstPlayerInfo.games}
							</td>
							<td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
								<Comparacion
									option="wins"
									firstPlayerInfo={firstPlayerInfo}
									secondPlayerInfo={secondPlayerInfo}
								/>
							</td>
							<td className="px-6 py-4">
								{secondPlayerInfo.wins / secondPlayerInfo.games}
							</td>
						</tr> */}

						<tr className="border-b border-gray-200 dark:border-gray-700">
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
							>
								Rating
							</th>
							<td className="px-6 py-4">{firstPlayerInfo.rating}</td>
							<td>
								<Comparacion
									option="rating"
									firstPlayerInfo={firstPlayerInfo}
									secondPlayerInfo={secondPlayerInfo}
								/>
							</td>
							<td className="px-6 py-4">{secondPlayerInfo.rating}</td>
						</tr>

						<tr>
							<th
								scope="row"
								className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
							>
								Peak rating
							</th>
							<td className="px-6 py-4">{firstPlayerInfo.peak_rating}</td>
							<td>
								<Comparacion
									option="peak_rating"
									firstPlayerInfo={firstPlayerInfo}
									secondPlayerInfo={secondPlayerInfo}
								/>
							</td>
							<td className="px-6 py-4">{secondPlayerInfo.peak_rating}</td>
						</tr>
					</tbody>
				</table>
			</section>
		</main>
	);
};

const Comparacion = ({ option, firstPlayerInfo, secondPlayerInfo }) => {
	return (
		<td className={`px-6 py-4 `}>
			{firstPlayerInfo[option] > secondPlayerInfo[option]
				? '>'
				: firstPlayerInfo[option] < secondPlayerInfo[option]
				? '<'
				: '='}
		</td>
	);
};

export default Result;

/*
2v2
: 
[]
brawlhalla_id
: 
3145331
games
: 
6
global_rank
: 
0
lastSynced
: 
1700171895921
legends
: 
(52) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
name
: 
"barbarbar338"
peak_rating
: 
1470
rating
: 
1863
region
: 
"EU"
region_rank
: 
0
tier
: 
"Platinum 1"
wins
: 
5
*/
