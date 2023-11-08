
const BackIcon = ({ width, height, color, backColor }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`icon icon-tabler icon-tabler-arrow-left ${color} ${backColor}`}
			width={width || 24}
			height={height || 24}
			viewBox="0 0 24 24"
			strokeWidth="2"
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
			<path d="M5 12l14 0"></path>
			<path d="M5 12l6 6"></path>
			<path d="M5 12l6 -6"></path>
		</svg>
	);
};

export default BackIcon