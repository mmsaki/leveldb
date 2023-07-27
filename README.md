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
   var level = require('level');
   var db = level('./whatever.db');
   ```
