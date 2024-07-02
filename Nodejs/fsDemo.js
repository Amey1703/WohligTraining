import fs from 'fs';

// readFile() - callback version of readFile

// fs.readFile('./test.txt','utf-8',(error, data) => {
//     if(error){
//         throw error;
//     }else{
//         console.log(data)
//     }
// })

// readFileSync() - synchronous version of readFile

// const data = fs.readFileSync('./test.txt','utf-8')
// console.log(data)

// readFile() - Promise version
// fs.readFile('./test.txt','utf-8').then((data) => console.log(data)).catch((err) => console.log(err))

const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt','utf-8')
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// writeFile() 
const writeFile = async () =>{
    try {
        await fs.writeFile('./test.txt','I am writing to this file.');
        console.log("Written to file...\n");
    } catch (error) {
        console.log(error.message);
    }
}

writeFile()
readFile()