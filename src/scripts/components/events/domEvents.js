import getJoke from '../../helpers/jokeData';
import punchline from '../../views/punchline';
import setUp from '../../views/setUp';

let joke = {};

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('get-joke-btn')) {
      getJoke().then((response) => {
        joke = {
          setup: response.setup,
          punchline: response.delivery
        };
        setUp(joke);
      });
    }

    if (e.target.id.includes('get-punchline-btn')) {
      punchline(joke);
    }

    if (e.target.id.includes('get-new-joke-btn')) {
      getJoke().then((response) => {
        joke = {
          setup: response.setup,
          punchline: response.delivery
        };
        setUp(joke);
      });
    }
  });
};

export default domEvents;
