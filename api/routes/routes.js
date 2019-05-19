// Initialize express router
let router = require('express').Router();

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

module.exports = router;