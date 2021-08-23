const Sequelize=require('sequelize');
const db=require('../config/database')

const Character=db.define('character',{
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    gender:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    culture:{
        type:Sequelize.STRING,
        allowNull:false
    },
    born:{
        type:Sequelize.STRING,
        allowNull:true
    },
    died:{
        type:Sequelize.STRING,
        allowNull:true
    }
},{
    updatedAt: false,
    schema:'iceandfire'
})

module.exports=Character