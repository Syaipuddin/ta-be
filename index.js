import { rest } from './app/app.js';

if(process.argv === 'rest' || process.argv[2] === 'rest') {
    rest();
} else {

    console.log(`No Matching Command!`);

}