const   express             = require("express"),
        router              = express.Router(),
        ops_controller      = require("../controllers/operations");

//Seeder route
router.get("/seed", ops_controller.seed);

// Export router
module.exports = router;