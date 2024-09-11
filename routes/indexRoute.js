import {Router} from 'express'
import { indexPageFunction } from '../controller/indexController.js';
import asyncHandler from "express-async-handler"

export const indexRouter = Router();

indexRouter.get('/',asyncHandler(indexPageFunction))


