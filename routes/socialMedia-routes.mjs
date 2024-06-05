import express from "express"
import { getAllSocialMedia } from "../controller/socialMedia-controller.mjs"
const Router = express.Router()

Router.get("/", (req, res, next) => getAllSocialMedia(req, res, next))

export default Router
