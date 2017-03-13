'use strict';
import express from 'express';
import {
    searchController,
    itemController
} from './controllers';

export const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello world');
})

router.get('/api/items', searchController.getList)

router.get('/api/items/:id', itemController.getItem)