import express from "express"

import { handleLogins, handleSignup } from '../controller/users.js';

const router=express.Router()

router.post("/signup",handleSignup)
router.post("/login",handleLogins)

export default router