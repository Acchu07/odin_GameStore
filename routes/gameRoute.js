import {Router} from 'express'
import asyncHandler from "express-async-handler"
import { gameIndexFunction, getParticularGameInfo } from '../controller/gameIndexController.js';
import { param } from 'express-validator';

export const gameRouter = Router();

gameRouter.get('/',asyncHandler(gameIndexFunction));
gameRouter.get('/:gameID',param('gameID').isNumeric({no_symbols: true}),asyncHandler(getParticularGameInfo));

