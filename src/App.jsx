import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/">
						<Route path="" element={<Index />} />
					</Route>

					{/* Cambiar por un componente NoMatch */}
					<Route path="*" element={<h1>Esta ruta no existe</h1>} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
