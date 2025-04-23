import {readFile} from "node:fs";

const read = async () => {
    readFile("./files/fileToRead.txt", 'utf8', (err, data) => {
        if(err) throw err;
        console.log(data);
    });
};

await read();