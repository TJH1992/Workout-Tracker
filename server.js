const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));

require("./routes/api-route.js")(app);
require("./routes/html-route.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.listen(PORT, () => {
    console.log("Listening on port 8080");
});

