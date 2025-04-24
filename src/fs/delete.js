import * as fs from "node:fs"

const remove = async () => {
    if(!fs.existsSync("./files/fileToRemove.txt")){
        throw new Error("FS operation failed")
    }
    fs.unlink("./files/fileToRemove.txt", (err) => {
        if(err) throw err;
    })
};

await remove();