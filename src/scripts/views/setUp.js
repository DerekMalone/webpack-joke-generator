const setUp = (obj = {}) => {
  document.querySelector('#joke-container').innerHTML = `
  <p>${obj.setup}</p>
  `;
  document.querySelector('#button-container').innerHTML = `
    <div><button id="get-punchline-btn" class="btn btn-get-punchline-btn btn-info">Get Punchline!</button></div>
    `;
};

export default setUp;
