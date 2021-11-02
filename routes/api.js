const router = require("express").Router();
const db = require("../models");

router.get('/api/workouts')
router.get('/api/workouts/range')
router.post('/api/workouts')
router.purge('/api/workouts')

module.exports = router;
