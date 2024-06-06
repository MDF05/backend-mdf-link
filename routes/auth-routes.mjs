import express from "express"
import { MyLogin, Myregister } from "../controller/auth-controller.mjs"
const Router = express.Router()

Router.post("/", (req, res, next) => MyLogin(req, res, next))

export default Router
