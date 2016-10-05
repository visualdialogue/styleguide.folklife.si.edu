/*
 * moduleinfo
 * https://github.com/kurohara/moduleinfo
 *
 * Copyright (c) 2015 Hiroyoshi Kurohara
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var fs = require('fs');

function getpath(module, object) {
	for (var srcpath in module._cache) {
		if (module._cache[srcpath].exports === object) {
			return srcpath;
		}
	}
	return null;
}

function isroot(dir) {
	if (dir === "/") {
		return true;
	}

	if (/[a-zA-Z]:\\$/.test(dir)) {
		return true;
	}

	return false;
}

function checkmain(dirpath, maindef, srcpath) {
  var mainpath = path.join(dirpath, maindef);

	if (mainpath === srcpath) {
		return true;
	}
	if (path.join(mainpath, 'index.js') === srcpath) {
		return true;
	}

  return false;
}

function searchpackage(modulepath) {
	var parentdir = path.dirname(modulepath);

	while (!isroot(parentdir)) {
		try {
			var packagejson = JSON.parse(fs.readFileSync(parentdir + "/package.json"));

			if (packagejson && checkmain(parentdir, packagejson.main, modulepath)) {
				return packagejson;
			}
		} catch (e) {
		}
		parentdir = path.dirname(parentdir);
	}
	return null;
}

module.exports = function(object) {
	var module = require('module');
	var modulepath = getpath(module, object);
	var result = { path: modulepath };
	if (modulepath) {
		result.packagejson = searchpackage(modulepath);
	}
	return result;
};

