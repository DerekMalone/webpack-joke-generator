const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="navigation"></div>
    <div id="main-container">
      <div="joke-container"></div>
      <div id="button-container"></div>
    </div>
    `;
};

export default domBuilder;