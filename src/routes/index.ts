import express from 'express';
import { controller } from '@controllers/index';
const router = express.Router();

router.get('/getMovieInfo/:movie', controller.getMovieInfo) 

module.exports = router