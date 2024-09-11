import { testDbWorking } from "../db/dbAccess.js"



async function indexPageFunction(req,res){
    res.render('index',{title:'Index Page'})
    console.log(await testDbWorking('Lena Foster'))
}

export {indexPageFunction}