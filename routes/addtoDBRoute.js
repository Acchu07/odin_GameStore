import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { addPostgreDB } from "../controller/addToDBController.js";


export const addtodatabase = Router();

addtodatabase.get('/',expressAsyncHandler(addPostgreDB))

