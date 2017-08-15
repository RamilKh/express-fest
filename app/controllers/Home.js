// person.js
'use strict';

module.exports = class Home {
    constructor(req, res, config, props) {
        this.req = req;
        this.res = res;
        this.config = config;
        this.props = props;
    }

    render(params) {
        this.res.send(global._fest.render(this.config.patchViews + '/index/index.xml', params));
    }

    index() {
        //props 
        var config = this.config;
        var props = this.props;

        //params of page
        var params = {
            patch: {
                patchBlocks: this.config.patchBlocks
            },
            name: 'home page',
            head: {
                title: 'Home page'
            }
        };

        //render page
        this.render(params); 
    }
}