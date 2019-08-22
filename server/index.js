const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const app = express();
const db = require('./queries');


// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
const isProd = (process.env.NODE_ENV === 'production');
config.dev = !isProd;
const nuxt = new Nuxt(config);
const { host, port } = nuxt.options.server;


/** Middleware */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Give nuxt middleware to express
app.use(nuxt.render);


/** Routes */
/* Profile */
app.get('/profiles', db.getProfiles);
app.get('/profiles/:id', db.getProfileById);
app.post('/profiles', db.createProfile);
app.put('/profiles/:id', db.updateProfile);
app.delete('/profiles/:id', db.deleteProfile);
/* Offer */
app.get('/offers', db.getOffers);
app.get('/offers/:id', db.getOfferById);
app.post('/offers', db.createOffer);
app.put('/offers/:id', db.updateOffer);
app.delete('/offers/:id', db.deleteOffer);

/** Start */
app.get('/api', (req, response) => {
  response.json({info: 'Nuxt.js, Express, And Postgres API.'})
});

if (config.dev) {
  new Builder(nuxt).build().then(listen)
} else {
  // Listen the server
  listen()
}

function listen(){
  app.listen(port, () => {
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    });
  })
}
