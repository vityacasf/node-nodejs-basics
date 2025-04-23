import { open } from 'node:fs';
import { access } from 'node:fs/promises';

const create = async () => {
    try{
    await access("./files/fresh.txt");
    console.log("FS operation failed"); 
    } catch{

    }
    open("./files/fresh.txt", "w", (err) => {
        if(err) throw err();
        console.log("file created");
    })

};

await create();