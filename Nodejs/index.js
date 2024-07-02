import { getPosts } from "./postController.js";
import {generateRandomNumbers, celciusToFahranheit} from "./utils.js";

console.log("Random Number: ",generateRandomNumbers());
console.log("Celcius to Fahranheit: ",celciusToFahranheit(100)); 

console.log(getPosts());
