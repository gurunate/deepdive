var Handlebars = require("handlebars"),
    fs = require("fs"),
    data = fs.readFileSync("template.hbs", 'utf8'),
    template = Handlebars.compile(data),
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

    Handlebars.registerHelper('img-thumb', function(src, options){
            return '<img class="thumb" src="http://mydomain.com/images' + src + '"/>';
        }
    );
    var html = template(obj);

fs.writeFile("index.html", html, function(err) {
    if(err) throw err;
    console.log("Hot Damn!")
});