import * as zlib from "node:zlib";
import * as fs from "node:fs"

const decompress = async () => {
    return new Promise((resolve, reject) => {
        const readStream = fs.createReadStream("./files/archive.gz");
        const writeStream = fs.createWriteStream("./files/fileToComssssssspress.txt");
        const gunzip = zlib.createGunzip();
    
        readStream.on('error', reject);
        writeStream.on('error', reject);
        gunzip.on('error', reject);
    
        writeStream.on('finish', resolve);
    
        readStream.pipe(gunzip).pipe(writeStream);
      });
};

await decompress();