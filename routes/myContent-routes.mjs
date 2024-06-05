import express from "express"
import {
    deleteMyContent,
    deleteMyContentMany,
    getMyContent,
    postMyContent,
    updateMyContents,
} from "../controller/myContent-controller.mjs"
const Router = express.Router()

Router.get("/", (req, res, next) => getMyContent(req, res, next))
Router.post("/", (req, res, next) => postMyContent(req, res, next))
Router.put("/update-content", (req, res, next) => updateMyContents(req, res, next))
Router.delete("/delete-one/:id", (req, res, next) => deleteMyContent(req, res, next))
Router.delete("/delete-many", (req, res, next) => deleteMyContentMany(req, res, next))

export default Router