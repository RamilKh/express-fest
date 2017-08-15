
module.exports = class Home {
   constructor(config) {
       this.config = config;
   }

   route() {
        var config = this.config;

        return {
            //home page
            home: {
                url: "/",
                controller: function(req, res) {
                    var Controller = require(config.patchController + '/Home.js');

                    var controller = new Controller(req, res, config, {}).index();
                }
            },
        }
        
   }
}