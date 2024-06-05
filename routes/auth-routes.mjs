import express from "express"
import { Myregister } from "../controller/auth-controller.mjs"
const Router = express.Router()

Router.post("/", (req, res, next) => Myregister(req, res, next))

export default Router
