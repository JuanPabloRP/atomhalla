import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PublicLayout = () => {
	const [modoOscuro, setModoOscuro] = useState(true);

	useEffect(() => {
		const temaGuardado = localStorage.getItem('color-theme');

		if (
			temaGuardado == 'dark' ||
			(!temaGuardado &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			setModoOscuro(true);
		} else {
			setModoOscuro(false);
		}
	}, []);

	const handleModoOScuro = () => {
		setModoOscuro((prevModoOscuro) => {
			const nuevoModoOscuro = !prevModoOscuro;
			localStorage.setItem('color-theme', nuevoModoOscuro ? 'dark' : 'light');
			return nuevoModoOscuro;
		});
	};
	return (
		<main className={modoOscuro ? 'dark' : 'light'}>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>

			<button
				id="theme-toggle"
				type="button"
				className="fixed right-0 bottom-0 mr-7 mb-7 text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 "
				onClick={handleModoOScuro}
			>
				{modoOscuro ? '🌞' : '🌙'}
			</button>
			<Navbar />
			<Outlet />
			<Footer />
		</main>
	);
};

export default PublicLayout;
