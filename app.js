var express = require('express');
var path = require('path');
var Mincer = require('mincer');
var proxy = require('simple-http-proxy');

// Mincer.logger.use(console);

var app = module.exports = express();

var environment = new Mincer.Environment();

environment.appendPath(path.join(__dirname, 'assets'));

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use('/assets', Mincer.createServer(environment));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get("/", function(req, res) {
  res.render("index");
});

app.get(/^\/_partials\/(.*)$/, function(req, res) {
  console.log(req.params[0]);
  res.render("_partials/" + req.params[0]);
});

app.use('/api', proxy("http://localhost:3000/"));

