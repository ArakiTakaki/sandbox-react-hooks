const prevCSS = `
  color: white;
  background-color: royalblue;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.1em 1em;
`;
const payloadCSS = `
  color: white;
  background-color: saddlebrown;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.1em 1em;
`;
const nextCSS = `
  color: white;
  background-color: darkblue;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.1em 1em;
`;

const logger = {
  before(state, action) {
    console.log('%cprev state', prevCSS);
    console.log(state);
    console.log('%cpayload', payloadCSS);
    console.log(action);
  },
  after(state, action) {
    console.log('%cnext state', nextCSS);
    console.log(state);
    console.log('====================');
  }
};
export default logger;
