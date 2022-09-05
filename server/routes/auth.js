import { Router } from "express";
import {register, login, getUser, getAll,removeUser}from './../controllers/auth.js';
import { checkAuth } from './../utils/checkAuth.js';
 

const router = new Router()

// Register
router.post('/register', register)

// Login
router.post('/login', login)

// Get User
router.post('/me', checkAuth, getUser)

// Get User
router.get('/users',  getAll )

// Delete User
router.delete('/:id', checkAuth,  removeUser )

export default router