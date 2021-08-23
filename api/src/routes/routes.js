const express=require('express');
const db=require('../config/database');
const Character=require('../models/Character');
const RawQueryService = require('../services/RawQueryService');

const router=express.Router()

//Get list of characters
router.get('/all',async (req,res)=>{
    Character.findAll()
            .then(async(characters)=>{
                var anstotal=[];
                for(let character of characters){
                    ans=character.dataValues
                    var books=await RawQueryService.getData('getBooks',[character.id])
                    ans.books=books
                    anstotal.push(ans)
                }
                return res.json(anstotal)
            })
            .catch(err=>console.log(err))
})

router.get('/last',(req,res)=>{
    Character.findAll({
        order:[["createdAt","DESC"]],
        limit:1
    }).then(character=>{
        return res.json(character)
    }).catch(err=>console.log(err))
})



module.exports=router;