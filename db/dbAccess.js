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
        text: `SELECT developer.columndeveloper, game.* FROM developer 
        INNER JOIN gamedeveloper ON developer.id = gamedeveloper.iddeveloper
        INNER JOIN game ON gamedeveloper.idgame = game.id
        WHERE gamedeveloper.idgame = $1`,
        value:[gameID]
    }
    const {rows} = await poolOne.query(query)
}

export{retrieveGamesList,retrieveGameInformation}