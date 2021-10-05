const punchline = (obj) => {
  document.querySelector('#joke-container').innerHTML = `
    <p>${obj.setup}</p>
    <p>${obj.punchline}</p>
    `;
  document.querySelector('#button-container').innerHTML = `
      <div><button id="get-new-joke-btn" class="btn btn-get-punchline-btn btn-info">Get New Joke!</button></div>;
      `;
};

export default punchline;
