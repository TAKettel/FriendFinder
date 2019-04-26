// 2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

let express = require("express");

let app = express();

let PORT = process.env.PORT || 1134;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("Listening on Port: " + PORT);
});