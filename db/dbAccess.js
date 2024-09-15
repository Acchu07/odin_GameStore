import { poolOne } from "../db/pool.js"

async function retrieveGamesList(){
    const query = {
        text: 'SELECT * from game',
    }
    const {rows} = await poolOne.query(query)
    return rows;
}

async function retrieveGameInformation(gameID){
    const query = {
        text: `SELECT game.*,developer.columndeveloper FROM developer 
        INNER JOIN gamedeveloper ON developer.id = gamedeveloper.iddeveloper
        INNER JOIN game ON gamedeveloper.idgame = game.id
        WHERE gamedeveloper.idgame = $1`,
        values:[gameID]
    }
    const {rows} = await poolOne.query(query);
    return rows[0];
}


export{retrieveGamesList,retrieveGameInformation}