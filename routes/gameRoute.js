import {Router} from 'express'
import asyncHandler from "express-async-handler"
import { gameIndexFunction } from '../controller/gameIndexController.js';

export const gameRouter = Router();

gameRouter.get('/',asyncHandler(gameIndexFunction));

