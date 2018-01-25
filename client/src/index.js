import ReactGA from 'react-ga';

ReactGA.initialize(process.env.GATEWAY_URL);
ReactGA.pageview(window.location.pathname + window.location.search);

require('./index.jsx');
