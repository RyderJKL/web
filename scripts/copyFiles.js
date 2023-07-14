const fs = require('fs-extra');

function copyFileOrDirectory(source, destination) {
  try {
    fs.copySync(source, destination);
    console.log(`${source} Copy successful！`);
  } catch (err) {
    console.error(`${source} Copy failed:`, err);
  }
}

console.log('Preparing to copy file or directory');
copyFileOrDirectory('./packages/web/configs', './dist/web/configs');

copyFileOrDirectory(
  './packages/web/next-i18next.config.js',
  './dist/web/next-i18next.config.js',
);

process.exit(0);
