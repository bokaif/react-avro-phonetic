const fs = require('fs');
const { getSuggestions } = require('./dist/index.js');
const { parse } = require('./dist/index.js');

const res = getSuggestions('boka', parse);
console.log('Suggestions for "boka":', res);
