const fetch = require("node-fetch");

module.exports={
    async getCharacter(){
        var randomInt=Math.floor(Math.random() * 2138) + 1
        var url=urlice+randomInt
        var ans=await fetch(url, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                    },
                })
        return ans.json()
    },

    async getBook(url){
        var ans=await fetch(url,{
            method:'GET',
            headers:{
                Accept:'application/json'
            }
        })
        return ans.json()
    }
    

}