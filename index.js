
const Logo = require('./shapes.js');


async function init (){
const logo = new Logo();
await logo.promptUser();
logo.generateLogo();

}


init();