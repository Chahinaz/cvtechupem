const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);

const models = {
  Offer: sequelize.import('./offer'),
  Profile: sequelize.import('./profile')
};

Object.keys(models).forEach(key => {
  if('associate' in models[key]){
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
