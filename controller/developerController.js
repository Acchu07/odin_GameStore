import { retrieveDeveloperList, retriveGamesFromDeveloper } from "../db/dbAccessdev.js"
import { validationResult } from "express-validator";

export async function DeveloperIndexFunction(req,res){
    const developerList = await retrieveDeveloperList();
    res.render('gameStorePage',{title:'Developer Catalogue',games:developerList})
}

export async function developerGames(req,res){
    const result = validationResult(req);
    if(!result.isEmpty()){
        const error = new Error('Validation failed for developerGames ' + req.url);
        error.statusCode = 400;
        error.validationErrors = result.array();
        throw error;
    }
    const gamesbydeveloper = await retriveGamesFromDeveloper(req.params.developerID);
    res.render('developerPage',{title:gamesbydeveloper[0].columnDeveloper,games:gamesbydeveloper})
}