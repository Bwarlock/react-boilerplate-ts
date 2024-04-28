function Loading() {
	return (
		<svg
			width="50px"
			height="50px"
			viewBox="0 0 50 50"
			xmlns="http://www.w3.org/2000/svg"
			fill="#000000">
			<path
				fill="#000000"
				d="M25 48c-12.15 0-22-9.85-22-22s9.85-22 22-22c6.418 0 12.426 2.74 16.624 7.537 1.736 1.992 3.222 4.263 4.41 6.754-1.178-2.248-2.674-4.256-4.41-5.998C38.703 8.232 32.148 5 25 5 13.85 5 5 13.85 5 25s8.85 20 20 20 20-8.85 20-20c0-.99-.072-1.97-.213-2.943-1.203 1.179-2.548 2.236-4.017 3.151C37.672 29.93 32.557 32 26 32c-9.93 0-18-8.07-18-18S16.07 2 26 2s18 8.07 18 18c0 9.385-7.22 17.082-16.405 17.952-.027 1.182-.094 2.357-.201 3.538C38.798 42.319 33.575 48 25 48zm0 0">
				<animateTransform
					attributeName="transform"
					attributeType="xml"
					type="rotate"
					from="0 25 25"
					to="360 25 25"
					dur="0.6s"
					repeatCount="indefinite"
				/>
			</path>
		</svg>
	);
}

export default Loading;
