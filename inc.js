var { Level } = require('level');
var db = new Level('inc.db', { valueEncoding: 'json' });

// create a program counter, that will:
// 1. write out a number:
//    > Everytime you run the program, it will:
//    1. read the previous number
//    2. increment it
//    3. print out the new number

db.get('count', function (err, value) {
	var n = (value || 0) + 1;
	db.put('count', n, function (err) {
		if (err) console.error(err);
		else console.log(n);
	});
});
