import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import PublicLayout from './layouts/PublicLayout';
import Jugadores from './pages/Jugadores';
import Comparar from './pages/Comparar';
import NoMatch from './components/NoMatch';
import Jugador from './pages/Jugador';
import About from './pages/About';
import Leyendas from './pages/Leyendas';
import Leyenda from './pages/Leyenda';
import BestPlayers from './pages/BestPlayers';
import Search from './pages/Search';

function App() {
	return (
		<main className="min-h-screen text-gray-900 dark:text-white dark:bg-gray-800">
			<Router>
				<Routes>
					<Route path="/" element={<PublicLayout />}>
						<Route path="" element={<Index />} />
						<Route path="players/" element={<Jugadores />}>
							<Route path="best" element={<BestPlayers />} />
							<Route path="search" element={<Search />} />
							<Route path=":id" element={<Jugador />} />
						</Route>
						<Route path="vs" element={<Comparar />} />
						<Route path="legends" element={<Leyendas />} />
						<Route path="legends/:id" element={<Leyenda />} />
						<Route path="about" element={<About />} />
					</Route>

					{/* Si la ruta no existe muestra esto xd*/}
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</Router>
		</main>
	);
}

export default App;
