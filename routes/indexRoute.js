import {Router} from 'express'
import asyncHandler from "express-async-handler"
import { indexPageFunction } from '../controller/indexController.js';

export const indexRouter = Router();

indexRouter.get('/',asyncHandler(indexPageFunction))


