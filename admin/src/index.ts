import {PLUGIN_ID} from './pluginId';
import {Initializer} from './components/Initializer';

export default {
	register(app: any) {
		app.registerPlugin({
			id: PLUGIN_ID,
			initializer: Initializer,
			isReady: false,
			name: PLUGIN_ID,
		});

		const style = document.createElement('style');
		style.textContent = `
        @media (max-width: 767px) {
            div[data-strapi-header] {
                padding: 20px;
            }
            #main-content > div:last-child {
                padding: 20px;
            }
            nav[aria-label="Content Manager"] {
                width: 100%;
                height: auto;
                position: inherit;
                top: inherit;
                border-right: none;
                border-bottom: 1px solid #4a4a6a;
                margin-bottom: 2rem;
            }
            a[href="#main-content"] + div > div > div {
	            grid-template-columns: repeat(1, minmax(0, 1fr));
            }
            main[aria-labelledby="main-content-title"] {
                padding: 20px;
            }
       }
	`;
		document.head.appendChild(style);
	},
};
