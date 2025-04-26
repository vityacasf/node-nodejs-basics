import * as fs from "node:fs";
import * as crypto from "node:crypto";


const calculateHash = async () => {
     const hash = crypto.createHash('sha256');
    fs.createReadStream("./files/fileToCalculateHashFor.txt").on('readable', ()=>{
        if(fs.createReadStream("./files/fileToCalculateHashFor.txt").read()){
            hash.update(fs.createReadStream("./files/fileToCalculateHashFor.txt"))
        }
    })
    console.log(hash);
};

await calculateHash();