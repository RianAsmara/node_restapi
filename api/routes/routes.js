// Initialize express router
let router = require('express').Router();

// Import morgan
// let morgan = require('morgan');

// Import JWT
// jwt = require('jsonwebtoken');

// Import Config
// let config = require('../../config/config');

// Set secret
// app.set('Secret', config.secret);

// Use morgan
// app.use(morgan('dev'));

// Default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Is Working',
        message: 'Welcome To The Worlds!',
    });
});

// Import contact controller
var contactController = require('../controller/contactController');

// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

// Route Auth
// router.post('/authenticate', function(req, res) {
//     if (req.body.username=="imnothing"){
//         if (req.body.password==1607){
//             // Create token
//             const payload = {
//                 check: true
//             };
//             var token = jwt.sign(payload, app.get('Secret'), {
//                 expiresIn: 1440 //24 Hours
//             });
//             res.json({
//                 message: 'authentication done',
//                 token: token
//             });
//         }else{
//             res.json({
//                 message:'please check your password'
//             });
//         }
//     }else{
//         res.json({
//             message: 'user not found'
//         })
//     }
// });

// Middleware
// router.use((req, res, next) => {
//     // Check header for token
//     var token = req.headers['access-token'];

//     // Decode tokne
//     if (token) {
//         // Validate and check if token is expired
//         jwt.verify(token, app.get('Secret'), (err, decoded) => {
//             if (err) {
//                 return res.json({
//                     message: 'invalid token'
//                 });
//             }else{
//                 req.decoded = decoded;
//                 next();
//             }
//         });
//     }else{
//         // If there's no token
//         res.send({
//             message: 'No Token Provided.'
//         });
//     }
// });

module.exports = router;