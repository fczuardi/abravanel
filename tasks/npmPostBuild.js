import { cd, cp, test, rm } from 'shelljs';

cd('dist/npm');
cp(
    '../../package.json',
    '../../*.md',
    '.'
);
if (test('-d', '../aws')) {
    cp('config.js', '../aws/.');
}
rm('config.js');
