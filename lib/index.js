var fs = require('fs');
var path = require('path');
var dirname = path.dirname;
var join = path.join;
var _exit = process.exit;
var colors = require('colors');
var readline = require('readline');
var mkdirp = require('mkdirp').sync;

exports.confirm = function(message, callback) {
  var rl = readline.createInterface(
    {
      input: process.stdin,
      output: process.stdout
    }
  );

  rl.question(message, function(input) {
    rl.close();
    callback(null, /^y|yes|ok|true$/i.test(input));
  })
};

exports.componentName = function(message, callback) {

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(message, function(input) {
    rl.close();

    if (!input) return callback(null, '');

    if (/^[A-Z]/.test(input)) {
      callback(null, input);
    }
    else {
      console.error('Component Name should start from Uppercase letter in React'.red);
      exports.componentName(message, callback);
    }
  });
};



exports.copyTemplate = function(from, to) {
  from = join(__dirname, '..', 'templates', from);
  exports.write(to, fs.readFileSync(from, 'utf-8'));
};

exports.loadTemplate = function(name) {
  return fs.readFileSync(path.join(__dirname, '..', 'templates', name), 'utf-8');
};

/**
 *
 * @param path
 * @param str
 * @param mode
 */
exports.write = function(path, str, mode) {
  mkdirp(dirname(path));
  fs.writeFileSync(path, str, { mode: mode || 0666 });
  console.log('   create : '.cyan + path);
};

exports.emptyDirectory = function(path, fn) {
  fs.readdir(path, function(err, files) {
    if (err && 'ENOENT' != err.code) throw err;
    fn(!files || !files.length);
  })
};


exports.launchedFromCmd = function() {
  return process.platform === 'win32'
    && process.env._ === undefined;
};

exports.exit = function(code) {

  var draining = 0;
  var streams = [process.stdout, process.stderr];

  function done() {
    if (!(draining--)) _exit(code);
  }

  exports.exit.exited = true;

  streams.forEach(function(stream) {
    draining += 1;
    stream.write('', done);
  });

  done();
};


exports.complete = function(err, path) {

  if (err) {
    process.stdin.destroy();
    console.log(err.toString().red);
    return exports.exit(0);
  }

  var prompt = exports.launchedFromCmd() ? '>' : '$';

  console.log();
  console.log();
  console.log('   install dependencies:');
  console.log('     %s cd %s && npm install', prompt, path);
  console.log();
  console.log();
  console.log('   initial stacking:');
  console.log('     %s npm run appstack', prompt);
  console.log();
  console.log('   browser sync with the app:');
  console.log('     %s npm run bsync', prompt);
  console.log();
};

exports.toCamelCase = function(name) {
  var component_name = '';
  var upper = true;
  var chr;

  for (var i = 0, len = name.length; i < len; ++i) {
    chr = name.charAt(i);

    if (['-', '_'].indexOf(chr) >= 0) {
      upper = true;
      continue;
    }

    if (upper) {
      component_name += chr.toUpperCase();
      upper = false;
      continue;
    }

    component_name += chr;
  }

  if (['-', '_'].indexOf(component_name.charAt(0)) >= 0) component_name = component_name.slice(1);
  return component_name;
};

var capitals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

exports.toLowerCase = function(name) {

  var component_name = '';
  var chr;

  for(var i = 0, len = name.length; i < len; ++i) {
    chr = name.charAt(i);
    if (capitals.indexOf(chr) >= 0) {
      component_name += '-' + chr.toLowerCase();
      continue;
    }
    component_name += chr;
  }

  if (['-', '_'].indexOf(component_name.charAt(0)) >= 0) component_name = component_name.slice(1);
  return component_name;
};

exports.replace = function(content, str, newstr) {

  var oldcontent = content;
  var newcontent;
  var running = true;
  while(running) {
    newcontent = oldcontent.replace(str, newstr);
    running = newcontent !== oldcontent;
    oldcontent = newcontent;
  }
  return newcontent;
};