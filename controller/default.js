var express=require("express")
var router=express.Router();
router.use("/cat_report",require("./cat_report"))
module.exports=router;