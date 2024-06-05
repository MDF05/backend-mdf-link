import mongoose from "mongoose"
const Schema = mongoose.Schema

const authSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const authModels = new mongoose.model("auth-users", authSchema)

export default authModels
