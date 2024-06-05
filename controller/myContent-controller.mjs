import { contentModels } from "../models/content-.mjs"
import { createError } from "../utils/create-error.mjs"

async function getMyContent(req, res, next) {
    try {
        const myContent = await contentModels.find({})

        return res.json({ myContent }).status(200)
    } catch (err) {
        next(createError(500, err))
    }
}

async function postMyContent(req, res, next) {
    try {
        const newPost = new contentModels(req.body)

        await newPost.save()

        res.status(201).json({
            succes: true,
            author: "muhammad dava fahreza",
            message: "berhasil menyimpan ke database",
            metode: req.body,
        })
    } catch (err) {
        next(createError(401, err))
    }
}

async function deleteMyContentMany(req, res, next) {
    try {
        const _id = req.params.id
        const findMyContent = await contentModels.find({ _id: _id })

        return res.status(202).json({
            author: "muhammad dava fahreza",
            deleted: findMyContent,
            params: _id,
        })
    } catch (err) {
        next(createError(401, err))
    }
}

async function deleteMyContent(req, res, next) {
    try {
        const _id = req.params.id
        const findMyContent = await contentModels.find({ _id: _id })
        const deleteOne = await contentModels.deleteOne({ _id: _id })

        res.status(201).json({
            delete: deleteOne,
            author: "muhammad dava fahreza",
        })
    } catch (err) {
        next(createError(401, err))
    }
}

async function updateMyContents(req, res, next) {
    try {
        const _id = req.body._id
        const findMyContents = await contentModels.find({ _id: _id })
        const updateMyContents = await contentModels.updateOne({ _id: _id }, { $set: req.body })

        res.status(200).json({ succes: true, update: updateMyContents, before: findMyContents })
    } catch (err) {
        next(createError(401, err))
    }
}

export { getMyContent, postMyContent, deleteMyContentMany, deleteMyContent, updateMyContents }
