const Sequelize=require('sequelize');
const db=require('../config/database')

const Book=db.define('book',{
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }
},{
    updatedAt: false,
    createdAt: false,
    schema:'iceandfire'
})

module.exports=Book