import * as fs from "node:fs";

const read = async () => {
    if(!fs.existsSync("./files/fileToRead.txt")){
        throw new Error("FS operation failed")
    }
    fs.readFile("./files/fileToRead.txt", 'utf8', (err, data) => {
        if(err) throw err;
        console.log(data);
    });
};

await read();