var exec = require('child_process').exec
var port = process.env.PORT || 3004;

// ...

var child = exec(`json-server --watch ./data.json --port ${port}`,
  function(err, stdout, stderr) {
    if (err) throw err;
    else console.log(stdout);
});

child.stdout.on('data', function (data) {
    process.stdout.write(data);
});

child.stderr.on('data', function (data) {
    process.stdout.write(data);
});

child.on('exit', function (data) {
    process.stdout.write('I\'m done!');
});

// execSync(`json-server --watch ./data.json --port ${port}`)
