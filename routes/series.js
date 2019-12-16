const   express             = require("express"),
        router              = express.Router(),
        series_controller    = require("../controllers/series");

router.get("/:id", series_controller.show);

// new route
router.get("/new", series_controller.new);

// Export router
module.exports = router;