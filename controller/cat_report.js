var express=require("express");
var sessionStorage=require("node-sessionstorage")
var router=express.Router();
var cat_report=require("../model/cat_report")
//var plotly=require("plotly")("ManasviKaplay","DHv9wPPLsJ20hqTlheEW")
router.get('/report',function(req,res){
    cat_report.find(function(err,result){
        if(err){
            res.send(err)
        }
        if(result){
            var data2=result[0]
            console.log("result....",data2)
            var sc_fam = data2.sc_fam;
            sessionStorage.setItem("sc_fam", sc_fam);
            var st_fam = data2.st_fam;
            sessionStorage.setItem("st_fam", st_fam);
            var other_fam = data2.other_fam;
            sessionStorage.setItem("other_fam", other_fam);
            /*var data = [
                {
                  x: ["SC","ST","Other"],
                  y: [data2.sc_fam,data2.st_fam,data2.other_fam],
                  type: "bar"
                }
              ];
              console.log("data..",data)
              var graphOptions = {filename: "basic-bar", fileopt: "overwrite"};
              plotly.plot(data, graphOptions, function (err, msg) {
                  console.log(msg);
              });*/
              var pagedata={"title":"category job card report","pagename":"cat_report",data2:data2}
    res.render("layout",pagedata)

        }
    })
})
module.exports=router;