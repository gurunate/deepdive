var less = require("less"),
    fs = require("fs"),
    data = fs.readFileSync("style.less", 'utf8');

less.render(data, function (e, css) {
    fs.writeFile("style.css", css, function(err) {
        if(err) throw err;
        console.log("Hot Damn!")
    });
});