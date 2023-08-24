import { signin, signup } from '../controllers/authController.js';
import express from 'express';

const router = express.Router();

// const router  = require('express').Router();



router.post("/signup",signup)
router.get("/signin",signin)

export default router;