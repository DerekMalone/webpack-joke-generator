import domEvents from '../components/events/domEvents';
import domBuilder from './domBuilder';
import landingPage from './landingPage';

const startApp = () => {
  domBuilder();
  domEvents();
  landingPage();
  domEvents();
};

export default startApp;
