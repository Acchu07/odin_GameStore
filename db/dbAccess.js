import { poolOne } from "../db/pool.js"

async function testDbWorking(parameter){
    if(parameter !== 'Lena Foster'){
        throw new Error('Parameter not the mentioned value')
    }
    const {rows} = await poolOne.query('SELECT * FROM jokes where jokeauthor = $1',[parameter])
    return rows;
}

export{testDbWorking}