# moduleinfo

The reverse search tool for module.

## Getting Started
Install the module with: `npm install moduleinfo`

```javascript
var some_module = require('some_module');
var moduleinfo = require('moduleinfo');
var some_module_info = moduleinfo(some_module);
```

## Documentation
This module returns a function to search module information.  
Calling this function with module object that was 'require()'ed will return the module information object, which contains path to the module source and parsed json object of 'package.json'(if present).  
The returned object will be formed like:  
```
{
  path: path_to_source_of_module,
  packagejson: parsed_package_json_object
}
```

Because not all modules has its 'package.json', so 'packagejson' key will not have value for such modules.

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

| version | description                      |
|---------|----------------------------------|
| 1.0.0   | First Release                    |
| 1.0.1   | Readme updated                   |

## License
Copyright (c) 2015 Hiroyoshi Kurohara  
Licensed under the MIT license.
