const inquirer = require('inquirer');
const fs = require('fs');


class Logo {
    constructor(text, shape, textColor, shapeColor) {

        // if (text.length > 3) {
        //     throw new Error('text must contain no more than 3 characters.');
        // }
        this.text = '';
        this.shape = '';
        this.textColor = '';
        this.shapeColor = '';




    };
    promptUser = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter text for logo ( 3 characters max)',
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter color for text ( use color keyword or hexidermal number)',
            },
            {
                type: 'list',
                name: 'shape',
                message: ' choose shape for logo',
                choices: ['circle', 'triangle', 'square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter color for shape ( use color keyword or hexidermal number)',
            },

        ])
            .then((data) => {



                this.text = data.text;
                this.shape = data.shape;
                this.textColor = data.textColor;
                this.shapeColor = data.shapeColor;

               
            
            });
    }

    generateLogo() {

        let shapeText = '';
               if (this.shape == 'circle'){
                shapeText = `<${this.shape} cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
               }


               if (this.shape == 'triangle'){
                shapeText = `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}"/>`;
               }

               if (this.shape == "square"){
                shapeText = `<rect x="50" height="200" width="200" fill="${this.shapeColor}"/>`;
               }
               

        const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${shapeText}
  
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}"> ${this.text} </text>
  
  </svg>`;

        fs.writeFile('logo.svg', svg, (err) => {
            if (err) {
                console.error('Error writing SVG file:', err);
            } else {
                console.log('Logo generated successfully!');
            }
        });



    }


}













module.exports = Logo;
