import * as fs from "node:fs"

const rename = async () => {
    if (fs.existsSync("./files/properFilename.md")) {
        throw new Error('FS operation failed: 123');
    }
    if (!fs.existsSync("./files/wrongFilename.txt")) {
        throw new Error('FS operation failed: 321');
    }
    fs.rename("./files/wrongFilename.txt", "./files/properFilename.md", (err) =>{
    if(err) throw err();
    console.log('Rename complete!');
});
};

await rename();