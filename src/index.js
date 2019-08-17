/* global require module Buffer */

const through = require('through2');

module.exports = operation => {
    if (!operation) {
        throw new Error('gulp-that: Missing operation');
    }

    return through.obj(
        (file, encoding, callback) => {
            file.contents = new Buffer(
                operation(file.contents.toString()).toString()
            );

            this.push(file);

            callback();
        }
    );
};
