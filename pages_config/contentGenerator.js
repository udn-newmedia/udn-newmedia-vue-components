/**
 * content generator
 * convert html content to string.
 */

const minify = require('html-minifier').minify;
const fs = require('fs');
require.extensions['.html'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const result = function(content) {
  const htmlText = require(content);
  return minify(htmlText, {
    removeAttributeQuotes: true,
    removeComments: true
  });
}

module.exports = result;