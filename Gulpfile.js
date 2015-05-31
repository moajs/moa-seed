var gulp = require('gulp');

require('shelljs/global');

// if (!which('git')) {
//   echo('Sorry, this script requires git');
//   exit(1);
// }
//
// // Copy files to release dir
// mkdir('-p', 'out/Release');
// cp('-R', 'stuff/*', 'out/Release');
//
// // Replace macros in each .js file
// cd('lib');
// ls('*.js').forEach(function(file) {
//   sed('-i', 'BUILD_VERSION', 'v0.1.2', file);
//   sed('-i', /.*REMOVE_THIS_LINE.*\n/, '', file);
//   sed('-i', /.*REPLACE_LINE_WITH_MACRO.*\n/, cat('macro.js'), file);
// });
// cd('..');
//
// // Run external tool synchronously
// if (exec('git commit -am "Auto-commit"').code !== 0) {
//   echo('Error: Git commit failed');
//   exit(1);
// }


gulp.task('default', function() {
    console.log('hello world')
});

gulp.task('server', function() {
  var sh = "./node_modules/.bin/nodemon bin/www";
  
  // Run external tool synchronously
  if (exec(sh).code !== 0) {
    echo('Error: server failed');
    exit(1);
  }
});

gulp.task('test', function() {
  var sh = "./node_modules/.bin/mocha -u bdd";
  
  // Run external tool synchronously
  if (exec(sh).code !== 0) {
    echo('Error: test failed');
    exit(1);
  }
});