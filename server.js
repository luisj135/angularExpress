var express = require('express');

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index');
});

app.use('/partials', function(req, res){
	console.log(res);
	res.sendfile(__dirname + '/public/view/partials/index_cont.pug');
});


app.listen(3000, function(err){
	if(err) return console.log('Un error !!!', process.exit(1));
	console.log('Ejecutando en el puerto 3000');
});


// var express = require('express'),
//     app = express(),
//     server = require('http').Server(app),
//     bodyParser = require('body-parser'),
//     webRoutes = require('./routes/web');

// app.set('view engine', 'pug');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// app.use(express.static('/public'));
// // Here's the new code:
// app.use('/', function(req, res){
//   res.render('index');
// });

// // app.use('/view', function(req, res){
// //   res.sendfile(__dirname + '/public/view/t');
// // });

// server.listen(3000, function() {
//   console.log('Listening on port %d', server.address().port);
// });
