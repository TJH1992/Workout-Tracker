const db = require("../models");
module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.workout.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum:"$exercises.duration"
                }
            }
        }]).then(function(workouts) {
           res.json(workouts); 
        })
    })
    app.put("/api/workouts/:id", (req, res) => {
        db.workout.findByIdAndUpdate(req.params.id,{
            $push: {
                exercises: req.body
            }
        }).then(function(workouts) {
            res.json(workouts);
        })
    })
    app.post("/api/workouts", (req, res) => {
        db.workout.create(req.body).then(function(workouts) {
            res.json(workouts);
        })
    })
    app.get("/api/workouts/range", (req, res) => {
        db.workout.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum:"$exercises.duration"
                }
            }
        }]).limit(7).then(function(workouts) {
            res.json(workouts);
        })
    })
}