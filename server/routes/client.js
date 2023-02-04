import express from "express";
import {getProducts, getCostumers, getTransactions , getGeography} from '../controllers/client.js'

const router = express.Router();

router.get('/products', getProducts)

router.get('/costumers', getCostumers)

router.get('/transactions', getTransactions)

router.get('/geography', getGeography)

export default router;
