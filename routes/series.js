const   express             = require("express"),
        router              = express.Router(),
        series_controller    = require("../controllers/series");

// Default route
router.get("/new", series_controller.new);

// Export router
module.exports = router;