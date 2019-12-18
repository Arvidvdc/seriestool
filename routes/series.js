const   express             = require("express"),
        router              = express.Router(),
        series_controller    = require("../controllers/series");

// New route
router.get("/new", series_controller.new);

// Show route
router.get("/:id", series_controller.show);

// Edit route
router.get("/:id/edit", series_controller.edit);

// Export router
module.exports = router;