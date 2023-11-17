import { useState } from 'react';
import SearchPlayer from '../components/SearchPlayer';
import Result from '../components/comparar/Result';

const Comparar = () => {
	const [playerInfo, setPlayerInfo] = useState({
		inputSearchFirstPlayer: '',
		playerFirst: {},
		fristPlayerValid: false,
		inputSearchSecondPlayer: '',
		playerSecond: {},
		secondPlayerValid: false,
	});

	const [validPlayers, setValidPlayers] = useState(false);

	const handleValidPlayers = () => {
		if (playerInfo.fristPlayerValid && playerInfo.secondPlayerValid) {
			setValidPlayers(true);
			return <Result />;
		} else {
			setValidPlayers(false);
		}
	};

	return (
		<main
			className="min-h-screen  md:flex flex-col justify-center items-center gap-7 bg-white text-black dark:bg-gray-800 dark:text-white"
		>
			<section className=" md:flex justify-around items-center">
				<SearchPlayer
					inputSearch={playerInfo.inputSearchFirstPlayer}
					setInputSearch={(value) =>
						setPlayerInfo({ ...playerInfo, inputSearchFirstPlayer: value })
					}
					validPlayer={playerInfo.fristPlayerValid}
					setValidPlayer={(value) =>
						setPlayerInfo({ ...playerInfo, fristPlayerValid: value })
					}
					player={playerInfo.playerFirst}
					setPlayer={(value) =>
						setPlayerInfo({ ...playerInfo, playerFirst: value })
					}
				/>
				<p
					className={`uppercase text-center font-bold text-4xl ${
						playerInfo.fristPlayerValid && playerInfo.secondPlayerValid
							? 'text-green-600'
							: 'text-red-500'
					}`}
				>
					Vs
				</p>
				<SearchPlayer
					inputSearch={playerInfo.inputSearchSecondPlayer}
					setInputSearch={(value) =>
						setPlayerInfo({ ...playerInfo, inputSearchSecondPlayer: value })
					}
					validPlayer={playerInfo.secondPlayerValid}
					setValidPlayer={(value) =>
						setPlayerInfo({ ...playerInfo, secondPlayerValid: value })
					}
					player={playerInfo.playerSecond}
					setPlayer={(value) =>
						setPlayerInfo({ ...playerInfo, playerSecond: value })
					}
				/>
			</section>
			<button
				className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
				disabled={
					!(playerInfo.fristPlayerValid && playerInfo.secondPlayerValid)
				}
				onClick={() => handleValidPlayers()}
			>
				<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
					Comparar
				</span>
			</button>

			{validPlayers ? (
				<Result
					firstPlayerInfo={playerInfo.playerFirst}
					secondPlayerInfo={playerInfo.playerSecond}
				/>
			) : null}
		</main>
	);
};

export default Comparar;
