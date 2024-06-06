import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import bodyParser from "body-parser"

import { createError } from "./utils/create-error.mjs"
import "./models/mongoose-connection.mjs"

import routesSocialMedia from "./routes/socialMedia-routes.mjs"
import routesMyContent from "./routes/myContent-routes.mjs"
import routesAuth from "./routes/auth-routes.mjs"
const app = express()

const corsOptions = {
    origin: "*",
}

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

app.get("/", async (req, res) => {
    res.status(200).json({
        succes: true,
        message: "welcome to my api",
        author: "muhammad dava fahrezas",
    })
})

app.use("/my-auth", routesAuth)
app.use("/all-social-media", routesSocialMedia)
app.use("/my-content", routesMyContent)

app.use("/", (req, res, next) => {
    next(createError(404, "page not found "))
})
app.use((err, req, res, next) => {
    const message =
        err.message || "somethng went wronng or page not found 404 and check your connection"
    const status = err.status || 505

    res.status(status).json({
        succes: false,
        message: message,
        author: "muhammad dava fahreza",
        status: status,
        errStack: err.stack || null,
    })
})

app.listen(3000, (err, res) => {
    console.log(`your app listening on http://localhost:3000`)
})
