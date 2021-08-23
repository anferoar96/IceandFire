//var Promise = require('bluebird');
const db=require('../config/database')

module.exports={
    getData:async(nameQuery,params=[])=>{
        let query=await getQueries(nameQuery,params);
        var data;
        await db.query(query,{ type: db.QueryTypes.SELECT}).then(info=>{
            data=info
        })
        return data
    },
}



let getQueries=(query,params=undefined)=>{
        var queries={
            'getBooks':
            'SELECT b.name '+
            'FROM books b,character_book cb '+
            'WHERE cb.idbook =b.id and cb.idcharacter ='+params[0],
        }
        return queries[query];
}