const express = require('express')
const {
        createWorkout,
        getWorkouts, 
        getWorkout,
        deleteWorkout,
        updateWorkout,
    } = require('../controllers/workoutcontroller')

const requireRoute = require('../middleware/requireroute')
const router = express.Router()

//require auth for all workouts routes
router.use(requireRoute)

//get all workout
router.get('/', getWorkouts)

//get a single workout
router.get ('/:id', getWorkout)

//post a new workout
router.post('/', createWorkout) 

//delete a new workout
router.delete('/:id', deleteWorkout)

//update a new workout
router.patch('/:id', updateWorkout)

module.exports = router