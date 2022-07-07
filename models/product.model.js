const {readFileSync, writeFileSync} = require('fs');
const {join} = require('path');
const model = {
    file: join(__dirname, '../data', 'products.json'),
    index: () => JSON.parse(readFileSync(model.file)),
    one: id => model.index().find(e => e.id == id)
};
module.exports = model;