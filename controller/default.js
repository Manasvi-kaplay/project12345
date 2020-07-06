var express=require("express")
var router=express.Router();
router.use("/home",require("./home"))
router.use("/states",require("./states"))
router.use("/login",require("./login"))
router.use("/reports",require("./reports"))
router.use("/cat_report",require("./cat_report"))
module.exports=router;