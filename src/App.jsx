import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import PublicLayout from './layouts/PublicLayout';
import NoMatch from "./components/NoMatch"

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<PublicLayout />}>
						<Route path="" element={<Index />} />
					</Route>

					{/* Cambiar por componente NoMatch xd */}
					<Route path="*" element={<NoMatch />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
