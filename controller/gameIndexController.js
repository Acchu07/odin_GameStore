import { retrieveGamesList } from "../db/dbAccess.js"
import { validationResult } from 'express-validator';

export async function gameIndexFunction(req,res){
    const arrayOfGames = await retrieveGamesList();
    res.render('gameStorePage',{title:'Games Catalogue',games:arrayOfGames})
}

export async function getParticularGameInfo(req,res){
    console.log('entering')
    console.log(req.params);
    const result = validationResult(req);
    console.log(result);
}