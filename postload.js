const path = require("path");
const fs = require("fs");

const extensionFolder = "assets/extension"

let folders = fs.readdirSync(extensionFolder);

for(const extensionName of folders) {
    const filepath = path.join(extensionFolder, extensionName);
    if(fs.existsSync(`${filepath}/${extensionName}.json`)) {
        let data = JSON.parse(fs.readFileSync(`${filepath}/${extensionName}.json`, {encoding: "utf-8"}));

        if(!data.files) break;

        for(let ext_file of data.files) {
            ig.fileForwarding[ext_file] = `extension/${extensionName}/${ext_file}`
        }
    }
}