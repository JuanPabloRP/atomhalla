import '../styles/home.css';

const Index = () => {
	return (
		<main className="home">
			<section className="home__section">
				<h1 className="home__title">¿Quieres saber tus estadisticas?</h1>
				<p className="home__description">
					En AtomHalla puedes buscarte, ver tus estadisticas, compararte con tus
					amigos y descubrir quien es mejor.
				</p>
			</section>
			<section className="home__section">
				<article className="homeCard">
					<h2 className="homeCard__title">AtomHalla</h2>
					<p className="homeCard__description">
						El lugar donde puedes ver tus estadisticas Lorem ipsum, dolor sit
						amet consectetur adipisicing elit. Hic voluptates praesentium
						necessitatibus modi, fuga eos, placeat saepe soluta suscipit earum
						ratione architecto voluptatem dolore repellat animi aliquam. Quas,
						accusamus eos?
					</p>
					<footer className="homeCard__footer">
						<a
							href="https://github.com/JuanPabloRP/atomhalla"
							target="_blank"
							rel="noreferrer"
							className="homeCard__btn"
						>
							Code
						</a>
					</footer>
				</article>
			</section>
		</main>
	);
};

export default Index;
