"use strict";
const react = require("react");
const PLUGIN_ID = "strapi-5-plugin-responsive-backend";
const Initializer = ({ setPlugin }) => {
  const ref = react.useRef(setPlugin);
  react.useEffect(() => {
    ref.current(PLUGIN_ID);
  }, []);
  return null;
};
const index = {
  register(app) {
    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID
    });
    const style = document.createElement("style");
    style.textContent = `
        @media (max-width: 767px) {
        	div:has(> div[data-strapi-header]) {
        		height: unset !important;
			}

            div[data-strapi-header], div:has(> div[data-strapi-header]) + div {
                padding: 20px;
            }

            div:has(> div[data-strapi-header]) + div {
            	flex-wrap: wrap;
			}

            div[data-strapi-header] > div:last-of-type, div[data-strapi-header] > div:last-of-type * {
                flex-wrap: wrap;
            }

            #main-content:not(:has(main)) > div:last-child {
                padding: 20px;
            }
            nav[aria-label="Content Manager"], nav[aria-label="Content-Type Builder"]{
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

            main[aria-labelledby="main-content-title"]:not(:has(div[data-strapi-header="true"], div[data-strapi-header-sticky="true"])) {
                padding: 20px;
            }

            div[id="radix-:rp:-content-draft"] > div > div > div > div {
            	gap: unset;
			}

			div[data-strapi-header-sticky] {
				width: calc(100% - 55px);
			}

			div[data-strapi-header-sticky] > div, div[data-strapi-header-sticky] > div > div > div, div[data-strapi-header-sticky] > div > div > div > div {
				flex-wrap: wrap;
				gap: 10px;
				padding: 0;
			}

			body[data-scroll-locked] > div:last-of-type > div {
				width: 90%;
			}
       }
	`;
    document.head.appendChild(style);
  }
};
module.exports = index;
