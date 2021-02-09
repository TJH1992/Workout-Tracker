const path = require("path");
const public = path.resolve(__dirname, "..", "public");
module.exports = function (app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(public, "index.html"))
    })

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(public, "exercise.html"))
    })

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(public, "stats.html"))
    })
};