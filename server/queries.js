// Connect PSQL DataBase
const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.SERVER_PORT,
});

/** Profiles */
const getProfiles = function (req, response) {
  pool.query('SELECT * FROM candidat ORDER BY id_candidat ASC', function (error, res) {
      if(error) {
          throw error;
      }
      response.status(200).json(res.rows)
  })
};

const getProfileById = function (req, response) {
  const id = parseInt(req.params.id);

  pool.query('SELECT * FROM candidat WHERE id_candidat = $1', [id], function (error, res) {
      if (error) throw error;
      response.status(200).json(res.rows)
  })
};

const createProfile = function (req, response) {
    const {nom, prenom, adresse_mail, mot_de_passe} = req.body;
    pool.query('INSERT INTO candidat (nom, prenom, adresse_mail, mot_de_passe) VALUES ($1, $2, $3, $4)',
        [nom, prenom, adresse_mail, mot_de_passe], function (error, res) {
            if(error) throw error;
            response.status(201).send(`New profile with id: ${res.id}.`)
    })
};

const updateProfile = function (req, response) {
  const id = parseInt(req.params.id);
  const {
      email, date_naissance, region, ville
  } =  req.body;

  pool.query('UPDATE candidat SET email=$1, date_naissance=$2, region=$3, ville=$3',
      [email, date_naissance, region, ville], function (error, res) {
          if(error) throw error;
          response.status(200).send(`Profile updated with id: ${id}`)
  })
};

const deleteProfile = function (req, response) {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM candidat WHERE id_candidat = $1', [id], function (error, res) {
        if (error) throw error;
        response.status(200).send(`User deleted with ID: ${id}`)
    })
};

/** Offers */
const getOffers = function (req, response) {
    pool.query('SELECT * FROM offre ORDER BY offre ASC', function (error, res) {
        if(error) {
            throw error;
        }
        response.status(200).json(res.rows)
    })
};

const getOfferById = function(req, response) {
    pool.query('SELECT * FROM candidat WHERE id_offre = $1', [id], function(error, res){
        if(error) throw error;
        response.status(200).json(res.rows);
    })
};

const createOffer = function (req, response) {
    const {poste, descriptif, gestion_administrative, missions, savoir, savoir_etre, savoir_faire, niveau_etude, contrat, localisation} = req.body;
    pool.query('INSERT INTO offre (poste, descriptif, gestion_administrative, missions, savoir, savoir_etre, savoir_faire, niveau_etude, contrat, localisation)' +
        ' VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
        [poste, descriptif, gestion_administrative, missions, savoir, savoir_etre, savoir_faire, niveau_etude, contrat, localisation], function (error, res) {
            if(error) throw error;
            response.status(201).send(`New offer with id: ${res.id}.`)
        })
};

const updateOffer= function (req, response) {
    const id = parseInt(req.params.id);
    const {
        poste, descriptif, gestion_administrative, missions, savoir, savoir_etre, savoir_faire, niveau_etude, contrat, localisation
    } =  req.body;

    pool.query('UPDATE offre SET poste=$1, descriptif=$2, gestion_administrative=$3, missions=$4, savoir=$5, savoir_etre=$6, savoir_faire=$7, niveau_etude=$8, contrat=$9, localisation=$10',
        [poste, descriptif, gestion_administrative, missions, savoir, savoir_etre, savoir_faire, niveau_etude, contrat, localisation], function (error, res) {
            if(error) throw error;
            response.status(200).send(`Offer updated with id: ${id}`)
        })
};

const deleteOffer = function (req, response) {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM offre WHERE id_candidat = $1', [id], function (error, res) {
        if (error) throw error;
        response.status(200).send(`User deleted with ID: ${id}`)
    })
};

module.exports = {
    getProfileById,
    getProfiles,
    createProfile,
    updateProfile,
    deleteProfile,

    getOfferById,
    getOffers,
    createOffer,
    updateOffer,
    deleteOffer
};
