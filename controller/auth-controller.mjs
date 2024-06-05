import authModels from "../models/auth.mjs"
import { createError } from "../utils/create-error.mjs"
import bcrypt from "bcrypt"

async function Myregister(req, res, next) {
    try {
        const salt = bcrypt.genSaltSync(10)
        const password = bcrypt.hashSync(req.body.password, salt)
        const username = req.body.username
        const findUsername = await authModels.findOne({ username: username })

        if (findUsername) return next(createError(403, "username telah digunakan"))

        const newUser = new authModels({
            username: username,
            password,
        })

        await newUser.save()

        res.json({
            success: true,
            author: "muhammad dava fahreza",
            message: "berhasil menyimpan ke database",
            username,
            findUsername,
        })
    } catch (err) {
        next(createError(402, err))
    }
}



export { Myregister }