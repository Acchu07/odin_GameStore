import { testDbWorking } from "../db/dbAccess.js"



async function indexPageFunction(req,res){
    res.render('homepage',{title:'Game Inventory', message:'Welcome to the Store'})
}

export {indexPageFunction}