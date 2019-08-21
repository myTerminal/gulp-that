/* global require module Buffer */

const through = require('through2');

module.exports = operation => {
    if (!operation) {
        throw new Error('gulp-that: Missing operation');
    }

    return through.obj(
        function (file, encoding, callback) { // Has to be a regular function
            file.contents = new Buffer(
                operation(file.contents.toString()).toString()
            );

            // Only works within a regular function, fails in an arrow function
            this.push(file);

            callback();
        }
    );
};
