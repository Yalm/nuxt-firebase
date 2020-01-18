const { https } = require('firebase-functions');
const { Nuxt } = require('nuxt-start');

const nuxtConfig = require('./nuxt.config.js');

const config = {
    ...nuxtConfig,
    dev: false,
    debug: false,
    buildDir: ".nuxt",
    publicPath: "public"
};

const nuxt = new Nuxt(config);

exports.ssr = https.onRequest(async (req, res) => {
    await nuxt.ready();
    nuxt.render(req, res);
});
