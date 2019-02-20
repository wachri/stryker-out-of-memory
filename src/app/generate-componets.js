const util = require('util');
const exec = util.promisify(require('child_process').exec);

const numberOfComponents = 20;
const numberOfModules = 5;
const moduleDeepMax = 10;

async function generateComponent(index, moduleName, moduleIndex) {
  const { stdout, stderr } = await exec(`ng generate component ${moduleName}/component${index}-of-module${moduleIndex}`);

  if (stderr) {
    throw  stderr
  }

  console.log(stdout);
}

async function generateModule(moduleIndex, moduleDeep = 0) {
  if (moduleDeep === moduleDeepMax) {
    return;
  }

  let moduleName = `module${moduleIndex}`;

  for (let i = 0; i <= moduleDeep; i++) {
    moduleName += `-sub${i}/`
  }

  const { stdout, stderr } = await exec(`ng generate module ${moduleName}`);

  if (stderr) {
    throw  stderr
  }

  console.log(stdout);

  for (let i = 0; i < numberOfComponents; i++) {
    await generateComponent(i, moduleName, moduleIndex);
  }

  await generateModule(moduleIndex, moduleDeep + 1);
}


async function main() {

  for (let i = 0; i < numberOfModules; i++) {
    generateModule(i);
  }
}

main()
