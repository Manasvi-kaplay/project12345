var express=require("express")
var router=express.Router();
router.use("/home",require("./home"))
router.use("/states",require("./states"))
router.use("/login",require("./login"))
router.use("/reports",require("./reports"))
router.use("/cat_report",require("./cat_report"))
router.use("/pending_reports",require("./pending_reports"))
router.use("/reg_application",require("./reg_application"))
router.use("/village_wise_imp",require("./village_wise_imp"))
module.exports=router;