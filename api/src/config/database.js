const { Sequelize } = require('sequelize');

module.exports=new Sequelize('ruedata2', 'fan', 'fan1289', {
    //host:'db2',
    host:'localhost',
    dialect: 'postgres',
    //port:'5432'
    port:'5430',
    //config to use specific schema
    schema:'iceandfire',
    searchPath: 'iceandfire',
    dialectOptions: {
        prependSearchPath: true
    }
});