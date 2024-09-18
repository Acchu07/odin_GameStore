import { poolOne } from "../db/pool.js"


// This was an optional part of the assignment so not completing it but a lot more needs to be done 
// Validation post which data retriveal to check if unique value already present also error handling
export async function addtoDatabase(params) {
    const query = {
        text: `INSERT INTO game (columngame,imageurl,steamurl)
        VALUES($1,'/images/placeholder.jpeg',$2) RETURNING id`,
        values:[params.game,params.urlsteam]
    }

    const {rows:game} = await poolOne.query(query);
    const {id:gameID} = game[0];

    const query2 = {
        text: `INSERT INTO developer (columndeveloper,imageurl)
        VALUES ($1,'/images/placeholder.jpeg') RETURNING id`,
        values: [params.developer]
    }

    const {rows:developer} = await poolOne.query(query2);
    const {id:developerID} = developer[0];
    console.log(gameID,developerID);
    await poolOne.query(`INSERT INTO gamedeveloper(idgame,iddeveloper) VALUES($1,$2)`,[gameID,developerID])
}