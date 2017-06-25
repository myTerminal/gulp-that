# gulp-that

[![npm version](https://badge.fury.io/js/gulp-that.svg)](https://badge.fury.io/js/gulp-that)
[![npm downloads](https://img.shields.io/npm/dt/gulp-that.svg)](https://www.npmjs.com/package/gulp-that)  
[![Build Status](https://travis-ci.org/myTerminal/gulp-that.svg?branch=master)](https://travis-ci.org/myTerminal/gulp-that)
[![Code Climate](https://codeclimate.com/github/myTerminal/gulp-that.png)](https://codeclimate.com/github/myTerminal/gulp-that)
[![Package Quality](http://npm.packagequality.com/shield/gulp-that.svg)](http://packagequality.com/#?package=gulp-that)
[![Coverage Status](https://img.shields.io/coveralls/myTerminal/gulp-that.svg)](https://coveralls.io/r/myTerminal/gulp-that?branch=master)
[![bitHound Overall Score](https://www.bithound.io/github/myTerminal/gulp-that/badges/score.svg)](https://www.bithound.io/github/myTerminal/gulp-that)
[![bitHound Code](https://www.bithound.io/github/myTerminal/gulp-that/badges/code.svg)](https://www.bithound.io/github/myTerminal/gulp-that)  
[![Dependency Status](https://david-dm.org/myTerminal/gulp-that.svg)](https://david-dm.org/myTerminal/gulp-that)
[![devDependency Status](https://david-dm.org/myTerminal/gulp-that/dev-status.svg)](https://david-dm.org/myTerminal/gulp-that#info=devDependencies)
[![peer Dependency Status](https://david-dm.org/myTerminal/gulp-that/peer-status.svg)](https://david-dm.org/myTerminal/gulp-that#info=peerDependencies)  
[![License](https://img.shields.io/badge/LICENSE-GPL%20v3.0-blue.svg)](https://www.gnu.org/licenses/gpl.html)
[![Gratipay](http://img.shields.io/gratipay/myTerminal.svg)](https://gratipay.com/myTerminal)  
[![NPM](https://nodei.co/npm/gulp-that.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gulp-that/)

A generic gulp plugin to do anything with a stream of files

## Installation

*gulp-that* is available on *Npm*. You can add it to your Node.js project with a simple command.

    npm install gulp-that

## How to Use

'Require' *gulp-that* into a variable and use it as you would use any other gulp plugin. The only special thing about *gulp-that* is that is needs you to tell it for what to do with the files in a stream.

    var gulpThat = require('gulp-that');

    gulp.task('transform, function () {
        gulp.src('src/**/*.js')
            .pipe(gulpDo(operation))
            .pipe(gulp.dest('dist'));
    });

The symbol `operation` can be a function that is capable of transforming a string into another. For example if it is a function like below,

    function operation (string) {
        return string.length;
    }

*gulp-that* would transform all files into their own file sizes in bytes.
