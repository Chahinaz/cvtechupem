const offer = (sequelize, DataTypes) => {
  const Offer = sequilize.define('offre', {
    id:{
      type: DataTypes.String,
      unique: true,
    }
  });

  Offer.associate = models => {
    Offer.hasMany(models.Profile);
  };

  Offer.findByPk = async offerId => {
    let offer = await Offer.findOne({
      where: {id: offerId}
    });

    return offer;
  };

  return Offer;
};

export { offer };
