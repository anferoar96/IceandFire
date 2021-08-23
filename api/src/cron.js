const cron = require('node-cron');
const utils=require('./utils')
const db=require('./config/database');

const Character=require('./models/Character');
const Character_book = require('./models/Character_book');
const Book = require('./models/Book');

module.exports =  {  

    everyminute:()=>{
        cron.schedule('* * * * *',async () => {
            var character=await utils.getCharacter()
            var {name,gender,culture,born,died,books}=character
            var idcharacter;
            Character.create({
                name,
                gender,
                culture,
                born,
                died
            }).then(character=>{
                idcharacter=character.getDataValue("id")
            }).catch(err=>console.log(err))

            books.forEach(async (book) => {
               var book=await utils.getBook(book)
               var {name}=book
               var info=await Book.findAll({
                   raw:true,
                   where:{
                       name
                   }
               })
               var idbook=info[0].id;
               Character_book.create({
                   idbook,
                   idcharacter
               }).then( character_book=>{
               }).catch(err=>console.log(err))
            });
        },{
            timezone: 'America/Bogota'}
        )
            
    }
}