/* global require module Buffer */

var through = require('through2');

module.exports = function (operation) {
    if (!operation) {
        throw new Error('gulp-that: Missing operation');
    }
    
    return through.obj(function(file, encoding, callback) {
        file.contents = new Buffer(operation(file.contents.toString()).toString());
        this.push(file);
        callback();
    });
};
