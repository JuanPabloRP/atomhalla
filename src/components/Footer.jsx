import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="bg-white shadow dark:bg-gray-900 ">
			<section className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
				<section className="sm:flex sm:items-center sm:justify-between">
					<Link to={'/'} className="flex items-center mb-4 sm:mb-0 ">
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							AtomHalla
						</span>
					</Link>
					<ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
						<li>
							<Link
								to="/about"
								className="mr-4 hover:underline md:mr-6 font-bold text-blue-600 dark:text-blue-400"
							>
								About
							</Link>
						</li>
						<li>
							<a
								href="https://github.com/JuanPabloRP"
								target="_blank"
								rel="noreferrer"
								className="mr-4 hover:underline md:mr-6"
							>
								GitHub
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/juan-pablo-rold%C3%A1n-pati%C3%B1o/"
								target="_blank"
								rel="noreferrer"
								className="mr-4 hover:underline md:mr-6 "
							>
								Linkedin
							</a>
						</li>
						<li>
							<a
								href="https://jprp-portfolio.vercel.app/"
								target="_blank"
								rel="noreferrer"
								className="mr-4 hover:underline md:mr-6"
							>
								Portfolio
							</a>
						</li>
					</ul>
				</section>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2023{' '}
					<a
						href="https://jprp-portfolio.vercel.app/"
						target="_blank"
						rel="noreferrer"
						className="hover:underline "
					>
						JuanPabloRP™
					</a>
					. All Rights Reserved.
				</span>
			</section>
		</footer>
	);
};

export default Footer;

/* 
<section className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
				<h1 className="text-gray-500 dark:text-white text-center text-2xl font-bold ">
					Made by
				</h1>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<section className="flex justify-around">
					{madeBy.map(({ name, links }) => (
						<article
							key={name}
							className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
						>
							<h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
								{name}
							</h2>
							<main>
								<a href="">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-brand-github  dark:text-white"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										strokeWidth="2"
										stroke="currentColor"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
										<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
									</svg>
								</a>
							</main>
						</article>
					))}
				</section>
			</section>

*/

/*

<footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
			<section className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
				<section className="sm:flex sm:items-center sm:justify-between">
					<a href="" className="flex items-center mb-4 sm:mb-0">
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
							AtomHalla
						</span>
					</a>
					<ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6 ">
								About
							</a>
						</li>
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6">
								GitHub
							</a>
						</li>
						<li>
							<a href="#" className="mr-4 hover:underline md:mr-6 ">
								Linkedin
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Portfolio
							</a>
						</li>
					</ul>
				</section>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2023{' '}
					<a href="" className="hover:underline">
						JuanPabloRP™
					</a>
					. All Rights Reserved.
				</span>
			</section>
		</footer>

 */
