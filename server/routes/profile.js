const uuidv4 = require('uuid/v4');
const { Router } = require('express');
const router = Router();

router.get('/profiles/', (req, res) => {
  return res.send(Object.values[req.context.models.Profile]);
});

router.get('/profiles/:id', (req, res) => {
  return res.send(req.context.models.Profile[req.params.id]);
});

router.post('/profiles', (req, res) => {
  const id = uuidv4();
  const offer = {
    id,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthDate: req.body.birthDate,
    location: req.body.location,
  };

  req.context.models.offers[id] = offer;

  return res.send(offer);
});

/**Async and no-Async delete*/
router.delete('/profiles/:id', async (req, res) =>{
  const profile = await req.context.models.Profile.destroy({
    where: {id: req.params.id }
  });

  return res.send(profile);
});

router.delete('/profiles/:id', (req, res) => {
  const {
    [req.params.id]: profile,
    ...otherProfiles
  } = req.context.models.profiles;

  req.context.models.profiles = otherProfiles;

  return res.send(profile);
});

export default router;
