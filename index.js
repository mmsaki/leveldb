var { Level } = require('level');
var db = new Level('./whatever.db', { valueEncoding: 'json' });
