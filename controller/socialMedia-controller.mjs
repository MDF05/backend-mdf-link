import { modelSocial } from "../models/social-media.mjs"
import { createError } from "../utils/create-error.mjs"

async function getAllSocialMedia(req, res, next) {
    try {
        const allSocialMedia = await modelSocial.find()
        return res
            .status(200)
            .json({ author: "muhammad dava fahreza", socialMedia: allSocialMedia })
    } catch (error) {
        next(createError(503, "gagal mengambil data dari database"))
    }
}

export { getAllSocialMedia }
