const fs = require("fs").promises;
const path = require("path");
const homedir = require("os").homedir();

async function findEnvFiles(folderName, envFiles) {
  // read all the items in the current folder
  const items = await fs.readdir(folderName, { withFileTypes: true });

  // iterate over each found item
  for (item of items) {
    // if the item is a directory, it will need to be searched
    if (item.isDirectory()) {
      // call this method recursively, appending the folder name to make a new path
      await findEnvFiles(path.join(folderName, item.name), envFiles);
    } else {
      // Make sure the discovered file is a .env file
      if (item.name === ".env" || item.name.indexOf(".env.") > -1) {
        // store the file path in the envFiles array
        envFiles.push(path.join(folderName, item.name));
      }
    }
  }
}

async function readSecrets(envFiles) {
  let allSecrets = [];
  for (file of envFiles) {
    const secrets = await (await fs.readFile(file)).toString();
    allSecrets.push(secrets);
  }
  return allSecrets;
}

async function main() {
  const envFiles = [];
  await findEnvFiles(homedir, envFiles);

  const secrets = await readSecrets(envFiles);

  secrets.forEach((secret) => {
    console.log(secret);
  });
}

main();
