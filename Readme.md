# plain-error-object

Converts an `Error` object into a `JSON.stringify`-able object.

## Usage

```
var plainError = require('plain-error-object');

var err = new Error('this is an error');
var jsonResult = JSON.stringify(plainError(err));
```
