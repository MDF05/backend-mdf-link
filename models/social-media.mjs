import mongoose from "mongoose"

const Schema = mongoose.Schema
const objectId = Schema.objectId

const socialSchema = new Schema({
    platform: String,
    username: String,
    "profile-link": String,
})

const modelSocial = new mongoose.model("social-media", socialSchema)

export { modelSocial }