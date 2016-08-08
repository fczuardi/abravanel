import { cd, cp, exec, sed } from 'shelljs';

const filesField = '  "files": ["aws.js","config.js"],';

exec('node_modules/.bin/babel --out-file dist/aws/config.js config.js');
cd('dist/aws');
cp('../npm/src/aws.js', '.');
cp('../npm/package.json', '.');
sed('-i', '../config', './config', 'aws.js');
sed('-i', 'exports.default = api;', 'module.exports = api;', 'aws.js');
sed('-i', /^{/, `{${filesField}`, 'package.json');
