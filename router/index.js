const router = require("express").Router();
const teslaRoutes = require("./api");

router.use(teslaRoutes);

module.exports = router;
