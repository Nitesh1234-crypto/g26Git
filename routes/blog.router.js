const router= require("express").Router();
router.get("/getblogs",(req,res)=>{
    res.json({
        success:true,
        data:[{title:"myblog"},{title:"second blog"}]
    })
})
router.get("/getoneblogs",(req,res)=>{
        res.send({
            success:true,
            data:{title:"mera blog"}
        })
})

module.exports=router;