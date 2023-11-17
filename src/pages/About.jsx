const About = () => {
	return (
		<main className="bg-white text-black dark:bg-gray-800 dark:text-white">
			<h1 className="py-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center ">
				Sobre el proyecto
			</h1>

			<section className="flex justify-center flex-wrap gap-5 ">
				<article className="flex flex-col items-center justify-center max-w-xl p-4 mx-auto my-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
						AtomHalla
					</h2>
					<p className="text-gray-700 dark:text-gray-400">
						Es un proyecto para la materia de Desarrollo Web, el proyecto
						muestra información de los jugadores de Brawlhalla, un juego de
						peleas de plataformas.
					</p>
					<br />

					<p className="text-gray-700 dark:text-gray-400">
						Se utiliza la Brawlhalla Open API para obtener la información de los
						jugadores, de los personajes, entre otros datos que se utilizan en
						el aplicativo web.
					</p>

					<a
						href="https://brawlhalla.vercel.app/"
						target="_blank"
						rel="noreferrer"
						className="my-2 font-bold text-blue-600  hover:underline "
					>
						Página de la API
					</a>
				</article>

				<article className="flex flex-col items-center justify-center max-w-xl p-4 mx-auto my-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
						Juan Pablo Roldan Patiño
					</h2>
					<p className="text-gray-700 dark:text-gray-400">
						Juan Pablo Roldán Patiño es un desarrollador de software que vive en
						Medellín, interesado en adquirir experiencia laboral, tiene
						conocimientos en lenguajes de programación como JavaScript, C# y
						Java, también en lenguajes como HTML, CSS y SQL.
					</p>
					<br />
					<p className="text-gray-700 dark:text-gray-400">
						Estudia Tecnología en Desarrollo de Software (I.U. Pascual Bravo), y
						ha participado en reconocidos bootcamps en Colombia como “Misión TIC
						(Mintic y UdeA)” y “NODO (EAFIT)”. Entre sus habilidades que más
						destacan encontramos el trabajo en equipo, el aprendizaje continuo y
						la consecución de objetivos.
					</p>
					<a
						href="https://jprp-portfolio.vercel.app/"
						target="_blank"
						rel="noreferrer"
						className="my-2 font-bold text-blue-600  hover:underline "
					>
						Portfolio
					</a>
				</article>
			</section>
		</main>
	);
};

export default About;
