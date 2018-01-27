import ReactGA from 'react-ga';

ReactGA.initialize(process.env.GA);
ReactGA.pageview(window.location.pathname + window.location.search);

require('./index.jsx');
