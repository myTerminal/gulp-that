var through=require("through2");module.exports=function(t){if(!t)throw new Error("gulp-that: Missing operation");return through.obj(function(r,o,n){r.contents=new Buffer(t(r.contents.toString()).toString()),this.push(r),n()})};