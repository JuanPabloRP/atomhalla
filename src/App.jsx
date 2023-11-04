import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import PublicLayout from './layouts/PublicLayout';
import Jugadores from './pages/Jugadores';
import Comparar from './pages/Comparar';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<PublicLayout />}>
						<Route path="" element={<Index />} />
						<Route path="players" element={<Jugadores />} />
						<Route path="vs" element={<Comparar />} />
					</Route>

					{/* Cambiar por un componente NoMatch */}
					<Route path="*" element={<h1>Esta ruta no existe</h1>} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
