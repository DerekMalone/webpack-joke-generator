import domEvents from '../components/events/domEvents';
import domBuilder from './domBuilder';

const startApp = () => {
  domBuilder();
  domEvents();
};

export default startApp;
