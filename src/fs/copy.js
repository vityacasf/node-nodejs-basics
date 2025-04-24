import * as fs from "node:fs"

const copy = async () => {
    if (fs.existsSync("./files")) {
        throw new Error('FS operation failed');
    }

    if (fs.existsSync("./files_copy")) {
        throw new Error('FS operation failed');
    }
};

await copy();
