var invoice=require("../models/order_table_model");
var express = require("express");
var router = express.Router();

router.get('/',function(req,res,next){
    invoice.getMonthlyPayment(function(err,rows){
        if(err){
            res.json(err);
        } 
        else
        {
            res.json(rows);
        }
    });
});

module.exports=router;