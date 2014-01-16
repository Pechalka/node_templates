var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

var ECT = require('ect');
var ectRenderer = ECT({ watch: true, root: __dirname + '/views' });
app.engine('.html', ectRenderer.render);
app.set('view engine', 'html');

app.use(express.favicon());
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// -------------- routes ------------------------------
app.get('/test', function(req, res){
	res.render('pages/test', {});
});

http.createServer(app).listen(3000, function(){
  console.log('Express server listening on port 3000');
});