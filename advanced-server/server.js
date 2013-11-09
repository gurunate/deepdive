var http = require("http"),
    Handlebars = require("handlebars"),
    less = require("less"),
    url = require("url"),
    fs = require("fs"),
    server = http.createServer(function(req, res) {
        var path = url.parse(req.url).pathname;

        switch(path) {
            case "/":
                doHbs(function() {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(fs.readFileSync("index.html", 'utf8'));
                    res.end();
                });
                break;
            default:
                if (/\.(css)$/.test(path)){
                    doLess(function() {
                        res.writeHead(200, {'Content-Type': 'text/css'});
                        res.write(fs.readFileSync(__dirname + path, 'utf8'));
                        res.end();
                    });
                }
        }

        
    });


function doLess(callback) {
    var data = fs.readFileSync("style.less", 'utf8');

    less.render(data, function (e, css) {
        fs.writeFile("style.css", css, function(err) {
            if(err) throw err;
            console.log("Less Compiled!")
            callback();
        });
    });
}

function doHbs(callback) {
    var data = fs.readFileSync("template.hbs", 'utf8'),
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
        console.log("HandleBars Compiled")
        callback();
    });
}

//doLess();
//doHbs();

server.listen(8080);