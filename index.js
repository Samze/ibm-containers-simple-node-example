var express = require('express'),
    app = express(),
    path = require('path');


app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'views/static'))); 

var messages = [
	'Hello world!',
	'Hello Interconnect!'
];

app.get('/', function (req, res){
	var idx = Math.floor(Math.random() * messages.length);
    res.render('index.html', {
    	header: messages[idx]
    });
});

app.listen(8080);
console.log('Running demo web app in container.')