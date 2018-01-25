var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

var router = express.Router();
router.route('/posts').get((req, res) => {
  res.sendFile(path.join(__dirname, 'client/data/posts.js'))
});

router.route('/comments').get((req, res) => {

});

app.use('/api', router);

app.listen(7770, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});
