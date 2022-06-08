// const animalArray = ['dog', 'cat', 'pig'];
// animalArray.push('cow');

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const personObj = {
//   name: 'Lernantino',
//   age: 99
// };

// personObj.age = 100;
// personObj.occupation = 'Developer';

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     // Is the same as this...
//     profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profielDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profielDataArgs;

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Checkout Index.html to see the output')
})