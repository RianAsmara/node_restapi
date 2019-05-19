// Import express
let express = require('express');

// Import body parse
let bodyParser = require('body-parser');

// Import mongoose
let mongoose = require('mongoose');

// Initialize app
let app = express();

// Import routes
let apiRoutes = require("./api/routes/routes");

// Body parse setup to handle post request
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to mongoose and set connection variable
mongoose.connect('mongodb://localhost/node_restapi', {useNewUrlParser: true});

var db = mongoose.connection;

// Setup server port
var port = process.env.port || 8888;

// Send response
app.get('/', (req, res) => res.send('Hello From Express and Nodemon'));

// Use API Routes
app.use('/api', apiRoutes);

// Launch app
app.listen(port, function(){
    console.log("Running Rest API in port " + port);
});

