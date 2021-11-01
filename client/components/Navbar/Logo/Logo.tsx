import * as React from 'react';

function Logo(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox='0 0 180 32' fill='none' height={32} {...props}>
			<path
				d='M39.97 24c-.952 0-1.884-.114-2.794-.341-.91-.242-1.636-.54-2.176-.896l1.11-2.39c.511.327 1.13.598 1.855.811.726.2 1.437.299 2.134.299 1.408 0 2.112-.349 2.112-1.046 0-.327-.192-.561-.576-.704-.384-.142-.975-.263-1.771-.362-.939-.143-1.714-.306-2.325-.491a3.682 3.682 0 01-1.6-.981c-.441-.47-.662-1.138-.662-2.006 0-.725.207-1.365.619-1.92.427-.569 1.038-1.01 1.835-1.322.81-.313 1.763-.47 2.858-.47.811 0 1.615.093 2.411.278.81.17 1.48.412 2.005.725l-1.109 2.368a6.623 6.623 0 00-3.307-.853c-.71 0-1.244.1-1.6.298-.355.2-.533.455-.533.768 0 .356.192.605.576.747.384.142.996.277 1.835.405.938.157 1.706.327 2.304.512a3.38 3.38 0 011.557.96c.44.47.661 1.124.661 1.963a3.03 3.03 0 01-.64 1.899c-.426.554-1.052.988-1.877 1.301-.81.299-1.778.448-2.901.448zM52.99 24c-1.224 0-2.326-.249-3.307-.747a5.842 5.842 0 01-2.283-2.112c-.54-.896-.81-1.913-.81-3.05 0-1.138.27-2.155.81-3.051a5.689 5.689 0 012.283-2.09c.981-.513 2.083-.769 3.306-.769 1.21 0 2.262.256 3.158.768a4.426 4.426 0 011.984 2.155l-2.582 1.387c-.597-1.053-1.457-1.579-2.581-1.579-.868 0-1.586.284-2.155.853-.569.57-.853 1.344-.853 2.326 0 .981.284 1.756.853 2.325.57.569 1.287.853 2.155.853 1.138 0 1.998-.526 2.581-1.578l2.582 1.408c-.413.91-1.074 1.621-1.984 2.133-.896.512-1.949.768-3.158.768zM66.94 12.181c1.422 0 2.567.427 3.434 1.28.882.854 1.323 2.12 1.323 3.798v6.57h-3.328v-6.058c0-.91-.2-1.586-.597-2.027-.399-.455-.975-.683-1.729-.683-.839 0-1.507.263-2.005.79-.498.512-.746 1.28-.746 2.304v5.674h-3.328V8h3.328v5.547c.44-.441.974-.775 1.6-1.003a5.635 5.635 0 012.047-.363zM80.3 24c-1.21 0-2.297-.249-3.264-.747a5.724 5.724 0 01-2.24-2.112c-.54-.896-.81-1.913-.81-3.05 0-1.138.27-2.155.81-3.051a5.574 5.574 0 012.24-2.09c.967-.513 2.055-.769 3.264-.769 1.209 0 2.29.256 3.243.768a5.573 5.573 0 012.24 2.091c.54.896.81 1.913.81 3.05 0 1.138-.27 2.155-.81 3.051a5.723 5.723 0 01-2.24 2.112c-.953.498-2.034.747-3.243.747zm0-2.73c.853 0 1.55-.285 2.09-.854.555-.583.832-1.358.832-2.325 0-.967-.277-1.735-.831-2.304-.54-.583-1.238-.875-2.091-.875-.853 0-1.557.292-2.112.875-.555.569-.832 1.337-.832 2.304 0 .967.277 1.742.832 2.325.555.569 1.258.853 2.112.853zM94.279 24c-1.209 0-2.297-.249-3.264-.747a5.723 5.723 0 01-2.24-2.112c-.54-.896-.81-1.913-.81-3.05 0-1.138.27-2.155.81-3.051a5.573 5.573 0 012.24-2.09c.967-.513 2.055-.769 3.264-.769 1.209 0 2.29.256 3.243.768a5.574 5.574 0 012.24 2.091c.54.896.81 1.913.81 3.05 0 1.138-.27 2.155-.81 3.051a5.724 5.724 0 01-2.24 2.112c-.953.498-2.034.747-3.243.747zm0-2.73c.853 0 1.55-.285 2.09-.854.555-.583.833-1.358.833-2.325 0-.967-.278-1.735-.832-2.304-.54-.583-1.238-.875-2.091-.875-.853 0-1.557.292-2.112.875-.555.569-.832 1.337-.832 2.304 0 .967.277 1.742.832 2.325.555.569 1.259.853 2.112.853zM102.797 8h3.328v15.83h-3.328V8zM116.189 12.181c1.423 0 2.568.427 3.435 1.28.882.854 1.323 2.12 1.323 3.798v6.57h-3.328v-6.058c0-.91-.199-1.586-.598-2.027-.398-.455-.974-.683-1.728-.683-.839 0-1.507.263-2.005.79-.498.512-.747 1.28-.747 2.304v5.674h-3.327V8h3.327v5.547a4.32 4.32 0 011.6-1.003 5.638 5.638 0 012.048-.363zM129.55 24c-1.209 0-2.297-.249-3.264-.747a5.72 5.72 0 01-2.24-2.112c-.541-.896-.811-1.913-.811-3.05 0-1.138.27-2.155.811-3.051a5.57 5.57 0 012.24-2.09c.967-.513 2.055-.769 3.264-.769 1.209 0 2.29.256 3.242.768a5.579 5.579 0 012.241 2.091c.54.896.81 1.913.81 3.05 0 1.138-.27 2.155-.81 3.051a5.729 5.729 0 01-2.241 2.112c-.952.498-2.033.747-3.242.747zm0-2.73c.853 0 1.55-.285 2.09-.854.555-.583.832-1.358.832-2.325 0-.967-.277-1.735-.832-2.304-.54-.583-1.237-.875-2.09-.875-.854 0-1.558.292-2.112.875-.555.569-.832 1.337-.832 2.304 0 .967.277 1.742.832 2.325.554.569 1.258.853 2.112.853zM149.63 12.352v11.477h-3.157v-1.365a4.527 4.527 0 01-1.579 1.152 5.084 5.084 0 01-1.984.384c-1.507 0-2.702-.434-3.584-1.301-.881-.868-1.322-2.155-1.322-3.862v-6.485h3.328v5.995c0 1.849.775 2.773 2.325 2.773.796 0 1.436-.256 1.92-.768.484-.526.725-1.301.725-2.325v-5.675h3.328zM156.575 24c-.953 0-1.885-.114-2.795-.341-.91-.242-1.635-.54-2.176-.896l1.109-2.39c.512.327 1.131.598 1.856.811.726.2 1.437.299 2.134.299 1.408 0 2.112-.349 2.112-1.046 0-.327-.192-.561-.576-.704-.384-.142-.974-.263-1.771-.362-.939-.143-1.714-.306-2.325-.491a3.68 3.68 0 01-1.6-.981c-.441-.47-.662-1.138-.662-2.006 0-.725.207-1.365.619-1.92.427-.569 1.038-1.01 1.835-1.322.811-.313 1.763-.47 2.858-.47.811 0 1.615.093 2.411.278.811.17 1.479.412 2.005.725l-1.109 2.368a6.623 6.623 0 00-3.307-.853c-.711 0-1.244.1-1.6.298-.355.2-.533.455-.533.768 0 .356.192.605.576.747.384.142.996.277 1.835.405.938.157 1.706.327 2.304.512.597.171 1.116.491 1.557.96.441.47.661 1.124.661 1.963 0 .711-.213 1.344-.64 1.899-.426.554-1.052.988-1.877 1.301-.811.299-1.778.448-2.901.448zM175.289 18.133c0 .043-.021.342-.064.896h-8.682a2.703 2.703 0 001.109 1.686c.583.412 1.309.618 2.176.618.597 0 1.124-.085 1.579-.256.469-.185.903-.469 1.301-.853l1.771 1.92c-1.081 1.237-2.66 1.856-4.736 1.856-1.294 0-2.439-.249-3.435-.747-.995-.512-1.763-1.216-2.304-2.112-.54-.896-.811-1.913-.811-3.05 0-1.124.264-2.134.79-3.03a5.6 5.6 0 012.197-2.112c.939-.512 1.984-.768 3.136-.768 1.124 0 2.141.242 3.051.726a5.207 5.207 0 012.133 2.09c.526.896.789 1.942.789 3.136zm-5.952-3.434c-.753 0-1.386.213-1.898.64-.512.426-.825 1.01-.939 1.749h5.654c-.114-.725-.427-1.301-.939-1.728-.512-.44-1.138-.661-1.878-.661z'
				fill='#2A84EE'
			/>
			<path
				d='M23.483 9.198c1.724 3.12.338 7.188-3.096 9.085-3.433 1.897-7.614.905-9.339-2.216-1.155-2.092-1.953-4.637.379-5.925 2.02-1.116 2.334.554 4.2-.476 1.865-1.03.773-2.272 2.794-3.388 2.02-1.116 3.906.828 5.062 2.92z'
				fill='#FF6A66'
			/>
			<path
				d='M20.387 18.283c3.434-1.897 4.82-5.965 3.095-9.086-1.155-2.091-3.04-4.035-5.061-2.92-2.021 1.117-.93 2.358-2.795 3.389l4.761 8.617z'
				fill='#FF9892'
			/>
			<path
				d='M16.894 3.57c.452.127 1.183 2.26.594 4.182-.647 1.7-1.56 3.013-2.726 2.778-1.167-.236-1.713-1.846-1.22-3.454.588-1.922 2.9-3.632 3.352-3.505z'
				fill='#6EEBB9'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M21.317 22.564a.72.72 0 01-.328 1.001 11.364 11.364 0 01-3.583.936v2.794h3.031c.418 0 .758.34.758.758v.19c0 .418-.34.757-.758.757h-8.24a.758.758 0 01-.757-.758v-.19c0-.418.34-.757.758-.757h2.935v-2.813a11.371 11.371 0 01-8.818-5.992A11.365 11.365 0 0110.4 3.51a.72.72 0 011.011.294l.46.871c.196.37.052.826-.3 1.052a8.864 8.864 0 008.247 15.62c.385-.162.842-.024 1.038.346l.46.871z'
				fill='#2A84EE'
			/>
		</svg>
	);
}

const MemoLogo = React.memo(Logo);
export default MemoLogo;
