# leveldb

an embedded key/value database

> It is a modular database

1. Embeded - in-process library
1. Standalone - separate service

## install

Since leveldb is a standalone database, you can install it with npm

```
npm install level
```

1. Set up a new database

   ```js
   var { Level } = require('level');
   var db = new Level('./whatever.db');
   ```

1. Value encoding
   ```js
   var { Level } = require('level');
   var db = new Level('./whatever.db', { valueEncoding: 'json' });
   ```

## what is leveldb good for?

1. running the same database in node and the browser
   > everything you do in leveldb you can do in the browser as well
1. when your data isn't very relational
1. building your own kappa architecture

## level methods

1. `db.get()`
1. `db.put()`
1. `db.del()`
1. `db.batch()`
1. `db.createReadStream()`
