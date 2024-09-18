import {Router} from 'express'
import asyncHandler from "express-async-handler"
import { indexPageFunction } from '../controller/indexController.js';
import { addPostgreDB, dataToAddDB } from '../controller/addToDBController.js';

export const indexRouter = Router();

indexRouter.get('/',asyncHandler(indexPageFunction))
indexRouter.use('/addToDB',asyncHandler(addPostgreDB));
indexRouter.use('/submitToDB',asyncHandler(dataToAddDB));

