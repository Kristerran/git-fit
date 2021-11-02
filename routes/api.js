const router = require("express").Router();
const db = require("../models");

router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})
router.get('/api/workouts/range')
router.post('/api/workouts')
router.put('/api/workouts')

module.exports = router;
