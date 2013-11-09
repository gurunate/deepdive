var fs = require("fs"),
    colors = require("colors"),
    replace = require("./replacer");

colors.setTheme({
    success: 'blue',
    error: 'red'
});

fs.readFile('replace-text.txt', function(err, data) {
    var content = replace(data.toString());
    console.log(content.error);
});