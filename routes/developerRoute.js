import {Router} from 'express'
import asyncHandler from "express-async-handler"
import { developerGames, DeveloperIndexFunction } from '../controller/developerController.js';
import { param } from 'express-validator';

export const developerRouter = Router();

developerRouter.get('/',asyncHandler(DeveloperIndexFunction));
developerRouter.get('/:developerID',param('developerID').isNumeric({no_symbols: true}),asyncHandler(developerGames));