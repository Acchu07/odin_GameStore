import {Router} from 'express'
import asyncHandler from "express-async-handler"
import { DeveloperIndexFunction } from '../controller/developerController.js';

export const developerRouter = Router();

developerRouter.get('/',asyncHandler(DeveloperIndexFunction));