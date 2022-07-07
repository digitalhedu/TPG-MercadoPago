const {static} = require('express');
const {join} = require('path');
module.exports = folder => static(join(__dirname,folder))