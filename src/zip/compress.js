import * as zlib from "node:zlib";
import * as fs from "node:fs"

const compress = async () => {
    return new Promise((resolve, reject) => {
        const readStream = fs.createReadStream("./files/fileToCompress.txt");
        const writeStream = fs.createWriteStream("./files/archive.gz");
        const gzip = zlib.createGzip();
    
        readStream.on('error', reject);
        writeStream.on('error', reject);
        gzip.on('error', reject);

        writeStream.on('finish', resolve);
    
        readStream.pipe(gzip).pipe(writeStream);
      });
};

await compress();