(function() {
    // init app by express
    var app = new (require('express'))();
    
    // init app configs
    var Config = require('./app/config/config.js');
    var Routing = require('./app/config/routing.js');
    
    // - templater put to global
    global._fest = require('fest');

    // config of server
    var config = new Config({
        dirname: __dirname
    }).get();
    var routing = new Routing(config).route();

    //routing
    app.get(routing.home.url, routing.home.controller);

    //start listen requests
    app.listen(config.server.port, function(error) {
        if (error) {
            console.error(error);
        } else {
            console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", config.server.port, config.server.port);
        }
    })

})();