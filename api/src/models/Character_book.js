const Sequelize=require('sequelize');
const db=require('../config/database');
const Book = require('./Book');
const Character=require('./Character')

const Character_book=db.define('character_book',{
    idbook:{
        type:Sequelize.INTEGER,
        references: {
            model: Book,// This is a reference to another model
            key: 'id', // This is the column name of the referenced model
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE // This declares when to check the foreign key constraint. PostgreSQL only.
        }
    },
    idcharacter:{
        type:Sequelize.INTEGER,
        references: {
            model: Character,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }
},{
    timestamps: false,
    freezeTableName: true,
    schema:'iceandfire'
})

module.exports=Character_book