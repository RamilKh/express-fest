'use strict';

module.exports = class Home {
    constructor(params) {
        this.params = params;

        this.params = {
            //config nodejs server
            server: {
                port: 8001,
                protocol: 'http',
                domain: 'localhost',
                host: '',
            },

            //patch of app files
            patch: params.dirname + '/app', 
            patchController: params.dirname + '/app/controllers', 
            patchModels: params.dirname + '/app/models',
            patchViews: params.dirname + '/app/views',
        };
    }

    get() {
        //change params
        this.params.host = this.params.protocol + '//' + this.params.domain;

        return this.params;
    }
}