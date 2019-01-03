//Your `server.js` file should require the basic npm packages we've used
// in class: `express` and `path`.

var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;


//makes it easy for our server to interpret data sent to it- standard
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes that give our server a map of how to respond

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT,function(){

    console.log("App listening on PORT :" + PORT);
});