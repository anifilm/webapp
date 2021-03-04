import axios from 'axios';

export default {
    computed: {
        CanvasUI() {
            return window.CanvasUI;
        },

        isEditor() {
            return this.CanvasUI.user ? this.CanvasUI.user.role === 2 : false;
        },

        isAdmin() {
            return this.CanvasUI.user ? this.CanvasUI.user.role === 3 : false;
        },
    },

    methods: {
        request() {
            let instance = axios.create();

            instance.defaults.headers.common['X-CSRF-TOKEN'] = document.head.querySelector(
                'meta[name="csrf-token"]'
            ).content;
            instance.defaults.baseURL = '/canvas-ui';

            const requestHandler = (request) => {
                // Add any request modifiers...
                return request;
            };

            const errorHandler = (error) => {
                // Add any error modifiers...
                switch (error.response.status) {
                    case 401:
                    case 405:
                        window.location.href = `/${CanvasUI.canvasPath}/logout`; // eslint-disable-line no-undef
                        break;
                    default:
                        break;
                }

                return Promise.reject({ ...error });
            };

            const successHandler = (response) => {
                // Add any response modifiers...
                return response;
            };

            instance.interceptors.request.use((request) => requestHandler(request));

            instance.interceptors.response.use(
                (response) => successHandler(response),
                (error) => errorHandler(error)
            );

            return instance;
        },

        /**
         * Parse a given url and return the different components.
         *
         * @param url
         * @link https://www.abeautifulsite.net/parsing-urls-in-javascript
         */
        parseURL(url) {
            let parser = document.createElement('a'),
                searchObject = {},
                queries,
                split,
                i;

            parser.href = url;
            queries = parser.search.replace(/^\?/, '').split('&');

            for (i = 0; i < queries.length; i++) {
                split = queries[i].split('=');
                searchObject[split[0]] = split[1];
            }

            return {
                protocol: parser.protocol,
                host: parser.host,
                hostname: parser.hostname,
                port: parser.port,
                pathname: parser.pathname,
                search: parser.search,
                searchObject: searchObject,
                hash: parser.hash,
            };
        },
    },
};
