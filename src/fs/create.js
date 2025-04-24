import * as fs from "node:fs";

const create = async () => {
    if (fs.existsSync("./files/fresh.txt")) {
        throw new Error('FS operation failed');
    }
    fs.writeFileSync("./files/fresh.txt", "I am fresh and young", 'utf8');
    console.log(`Файл успешно создан.`);

};

await create();