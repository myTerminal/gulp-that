# gulp-that

[![npm version](https://badge.fury.io/js/gulp-that.svg)](https://badge.fury.io/js/gulp-that)
[![npm downloads](https://img.shields.io/npm/dt/gulp-that.svg)](https://www.npmjs.com/package/gulp-that)  
[![Build Status](https://travis-ci.org/myTerminal/gulp-that.svg?branch=master)](https://travis-ci.org/myTerminal/gulp-that)
[![Code Climate](https://codeclimate.com/github/myTerminal/gulp-that.png)](https://codeclimate.com/github/myTerminal/gulp-that)
[![Coverage Status](https://img.shields.io/coveralls/myTerminal/gulp-that.svg)](https://coveralls.io/r/myTerminal/gulp-that?branch=master)  
[![Dependency Status](https://david-dm.org/myTerminal/gulp-that.svg)](https://david-dm.org/myTerminal/gulp-that)
[![devDependency Status](https://david-dm.org/myTerminal/gulp-that/dev-status.svg)](https://david-dm.org/myTerminal/gulp-that#info=devDependencies)
[![peer Dependency Status](https://david-dm.org/myTerminal/gulp-that/peer-status.svg)](https://david-dm.org/myTerminal/gulp-that#info=peerDependencies)  
[![License](https://img.shields.io/github/license/myTerminal/ample-alerts.svg)](https://opensource.org/licenses/MIT)  
[![NPM](https://nodei.co/npm/gulp-that.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gulp-that/)

A generic gulp plugin to do anything with a stream of files

## Installation

*gulp-that* is available on *Npm*. You can add it to your Node.js project with a simple command.

    npm install gulp-that

## How to Use

'Require' *gulp-that* into a variable and use it as you would use any other gulp plugin. The only special thing about *gulp-that* is that is needs you to tell it for what to do with the files in a stream.

    const gulpThat = require('gulp-that');

    gulp.task('convert-to-lengths', () => {
        gulp.src('src/**/*.js')
            .pipe(gulpThat(operation))
            .pipe(gulp.dest('dist'));
    });

The symbol `operation` can be a function that is capable of transforming a string into another. For example, if it is a function like below,

    const operation = inputString =>
        inputString.length;

*gulp-that* would transform all files into their own file sizes in bytes.
