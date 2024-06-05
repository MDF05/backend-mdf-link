import mongoose from "mongoose"

const Schema = mongoose.Schema

const contentSchema = new Schema({
    "tanggal-upload": String,
    topic: String,
    judul: String,
    deskripsi: String,
    tools: String,
    github: String,
    youtube: String,
    "other-link": String,
    tipe: String,
})

const contentModels = new mongoose.model("my-content", contentSchema)

export { contentModels }
