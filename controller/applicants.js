var express=require("express");
var router=express.Router();
var queries=require("../model/category")
router.post('/form',function(req,res){
    console.log("*********",req.body)
    var year=req.body.year;
    var state=req.body.state;
    var district=req.body.district;
    var block=req.body.block;
    var panchayat=req.body.panchayat;
    req.session.year = year;
    req.session.state = state;
    req.session.district=district;
    req.session.block = block;
    req.session.panchayat = panchayat;
    var pagedata={"pagename":"applicants","title":"Application form",state:state,year:year,district:district,block:block,panchayat:panchayat}
            res.render("layout",pagedata);
})
router.post('/add',function(req,res){
    var Applicant_Detail=[]
    console.log("req.body in applicants...",req.body)
    var Name=req.body.Name;
    var Gender=req.body.Gender;
    var Age=req.body.Age;
    var Request_for_Registration=req.body.Request_for_Registration;
    var Date_of_Job_card_Issue=req.body.Date_of_Job_card_Issue;
    var Disabled=req.body.Disabled;
    var Minority=req.body.Minority;
    var Job_Card_Id=req.body.Job_Card_Id;
    var Reason=req.body.Reason;
    var Status=req.body.Status;
    for(var i=0;i<Name.length;i+=1){
        Applicant_Detail.push({"Name":Name[i],"Gender":Gender[i],"Age":Age[i],
        "Request_for_Registration":Request_for_Registration[i],
        "Date_of_Job_card_Issue":Date_of_Job_card_Issue[i],"Disabled":Disabled[i],
"Minority":Minority[i],"Job_Card_Id":Job_Card_Id[i],"Reason":Reason[i],"Status":Status[i]})
    }
    console.log("Applicant_Detail array......",Applicant_Detail)
})
module.exports=router;