const Sequelize = require('sequelize');

const profile = (sequelize, DataTypes) => {
  const Profile = sequelize.define('profil', {
    id:{
      type: DataTypes.String,
      unique: true
    }
  });

  Profile.findByPk = async profileId => {
    let profile = await Profile.findOne({
      where: {id: profileId}
    });

    return profile;
  };

  return Profile;
};

export { profile };
