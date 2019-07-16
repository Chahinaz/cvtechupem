const uuidv4 = require('uuid/v4');
const { Router } = require('express');

const router = Router();

router.get('/offers', async (req, res) => {
  const offers = await req.context.models.Offer.findAll();
  return res.send(offers);
});

router.get('/:offers/id', async (req, res) => {
  const offer = await req.context.models.Offer.findByPk(
    req.params.id
  );
  return res.send(offer);
});

router.post('/offers', (req, res) => {
  const id = uuidv4();
  const offer = {
    id,
    sector: req.body.sector,
    post: req.body.post,
    description: req.body.description,
    management: req.body.management,
    missions: req.body.missions,
    knowledge: req.body.knowledge,
    howToBe: req.body.howToBe,
    expertise: req.body.expertise,
    studiesLvl: req.body.studiesLvl,
    contract: req.body.contract,
    location: req.body.location,
    profileId: req.context.me.id,
  };

  req.context.models.offers[id] = offer;

  return res.send(offer);
});

/**Async and no-Async delete*/
router.delete('/offers/:id', async (req, res) =>{
  const offer = await req.context.models.Offer.destroy({
    where: {id: req.params.id }
  });

  return res.send(offer);
});

export default router;
