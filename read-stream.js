var { Level } = require('level');
var db = new Level('batch.db', { valueEncoding: 'json' });
var to = require('to2');

db.createReadStream();
