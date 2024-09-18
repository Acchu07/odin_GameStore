import 'dotenv/config';
import { addtoDatabase } from '../db/addData.js';

export async function addPostgreDB(req,res){
    if(req.query.password === process.env.Password){
        res.sendFile('/home/acchu/odinProject/node/Projects/odin_GameStore/views/submitgametoDB.html') // change using dirname
        return
    }
    res.send('passwordIncorrect')
}

export async function dataToAddDB(req,res){
    await addtoDatabase(req.body)
    res.send('dataAdded')
}