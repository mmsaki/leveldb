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

## atomicity

> this means that if you have a bunch of operations, they should either all succeed or all fail

1. Either all transaction succeed or all transactions fail

## consistency

> this means that data is not in some in between state, e.g. between two valid states, this might give you some guarantees about how your data works

1. atomicity is important to enforce consistency
1. Suppose a user has just signed up. We might need to create:
   1. a record for their name
   1. a record for their login username and password
      > We use `db.batch()` for these operations so that if one operation fails we are guranteed that all other operations will fail so we have consistent data
