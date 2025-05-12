var express = require('express');
var router = express.Router();
require('../models/connection');
const { checkBody } = require('../modules/checkBody');
const Place = require('../models/place')

router.post('/', (req, res) => {
  if (!checkBody(req.body, ['nickname', 'name', 'latitude', 'longitude'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

  const newPlace = new Place({
    nickname: req.body.nickname,
    name: req.body.name,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  })

  newPlace.save().then(() => {
    res.json({result: true})
  })

})

router.get('/:nickname', (req, res) => {
  Place.find({nickname: req.params.nickname})
    .then(data => {
      if(data)
        res.json({result: true, places: data})
      else
        res.json({result: false})
    })
})

router.delete('/', (req, res) => {
  Place.deleteOne({nickname: req.body.nickname, name: req.body.name})
    .then((data)=> {
      res.json({result: true})
    })
})

module.exports = router;