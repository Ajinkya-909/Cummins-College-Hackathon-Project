import express from 'express'

import { calculateEcoBonus, foorPrint } from '../controller/calc.controller.js';


const router = express.Router();

router.post('/footPrint',foorPrint);

router.post('/eco-bonus', calculateEcoBonus);

export default router