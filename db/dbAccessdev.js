import { poolOne } from "../db/pool.js"

async function retrieveDeveloperList(){
    const query = {
        text: 'SELECT * from developer',
    }
    const {rows} = await poolOne.query(query)
    return rows;
}

async function retriveGamesFromDeveloper(param){
    const query = {
        text: `SELECT developer.*, game.id,game.columngame,game.imageurl FROM developer 
        INNER JOIN gamedeveloper on developer.id = gamedeveloper.iddeveloper
        INNER JOIN game on gamedeveloper.idgame = game.id where developer.id = $1`,
        values: [param]
    }
    const {rows} = await poolOne.query(query)
    return rows;
}

export {retrieveDeveloperList, retriveGamesFromDeveloper}