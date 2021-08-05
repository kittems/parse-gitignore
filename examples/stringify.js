'use strict';

const fs = require('fs');
const path = require('path');
const gitignore = require('..');

const filepath = path.join(__dirname, '../.gitignore');
const contents = fs.readFileSync(filepath);

const res = gitignore.parse(contents);

console.log(res);
console.log(gitignore.stringify(res.sections));
