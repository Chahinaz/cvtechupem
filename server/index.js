const dotenv = require('dotenv/config');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const consola = require('consola');

const routes = require('./routes');
const { models, sequelize } = require('./models/index');
const { Nuxt, Builder } = require('nuxt');

const app = express();


/** Middleware */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
const isProd = (process.env.NODE_ENV === 'production');


/** Routes */
app.use('/offers', routes.offer);
app.use('/profiles', routes.profile);


/** Start */
async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);
  const { host, port } = nuxt.options.server;

  // Build only in dev mode
  if (!isProd) {
    const builder = new Builder(nuxt);
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Connect PSQL DataBase
  const eraseDatabaseOnSync = true;

  sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
    app.listen(process.env.PORT, () =>
      console.log(`Example app listening on port ${process.env.PORT}!`),
    );
  });

  // Listen the server
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  });
}

start();
