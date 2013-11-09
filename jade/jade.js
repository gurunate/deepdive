var Jade = require("jade"),
    fs = require("fs"),
    data = fs.readFileSync("template.jade", 'utf8'),
    template = Jade.compile(data),
    obj = {
        name: "Ross",
        img: "mypic.png",
        obj: {
            name: "Secret",
            age: 400
        },
        people: [
            {name: "Ron 1"},
            {name: "Ron 2"},
            {name: "Ron 3"}
        ]
    };
    var html = template(obj);

fs.writeFile("index.html", html, function(err) {
    if(err) throw err;
    console.log("Hot Damn!")
});