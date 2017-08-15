# express-fest

Docs fest template engine https://github.com/mailru/fest

1. Install.
npm install

2. Use fest-mailru with express js.

# include
var fest = require('fest');

# rendering
var params = {
    name: 'index page'
};
res.send(fest.render('index.xml', params));

