import { retrieveGameInformation, retrieveGamesList } from "../db/dbAccess.js"
import { validationResult } from 'express-validator';

export async function gameIndexFunction(req,res){
    const arrayOfGames = await retrieveGamesList();
    res.render('gameStorePage',{title:'Games Catalogue',games:arrayOfGames})
}

export async function getParticularGameInfo(req,res){
    const result = validationResult(req);
    if(!result.isEmpty()){
        const error = new Error('Validation failed for getParticularGameInfo ' + req.url);
        error.statusCode = 400;
        error.validationErrors = result.array();
        throw error;
    }
    const gameInformation = await retrieveGameInformation(req.params.gameID)
    res.render('individualGamepage',{gameInformation});
}