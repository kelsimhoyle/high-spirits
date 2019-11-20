const router = require("express").Router();
const userRoutes = require("./userRoutes");
const alcoholRoutes = require("./alcoholRoutes");
const distilleryRoutes = require("./distilleryRoutes");

router.use("/users", userRoutes);
router.use("/alcohol", alcoholRoutes);
router.use("/distillery", distilleryRoutes);

module.exports = router;
