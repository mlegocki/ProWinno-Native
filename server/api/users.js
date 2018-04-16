const router = require('express').Router();
const { Users } = require('../db/models');

router.get('/', (req, res, next) => { 
  Users.find((err, users) => res.send(users));
})

module.exports = router;