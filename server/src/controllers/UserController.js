const User = require('../models/user')

const index = async (req, res) => {
    try {
        const data = await User.find().sort({ createdAt: -1 })
        if (!data) throw new Error('No Data Found')

        res.status(200).send(data)
    } catch (err) {
        res.status(200).send(err)
    }
}

const store = async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            role: req.body.role,
            password: req.body.password,
            courses: [{
                course_id: req.body.course.course_id,
                name: req.body.course.name,
                progress: req.body.course.progress,
            }]
        })
        const data = await user.save()
        if (!data) throw new Error('Unable to save Data')

        res.status(200).send(data)
    } catch (err) {
        res.status(200).send(err)
    }
}

const show = async (req, res) => {
    try {
        const { id } = req.params
        const data = await User.findOne({ _id: id })
        if (!data) throw new Error('No Data Found')

        res.status(200).send(data)
    } catch (err) {
        res.status(200).send(err)
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params
        const user = {
            name: req.body.name,
            email: req.body.email,
            role: req.body.role,
            password: req.body.password,
            courses: [{
                course_id: req.body.course.course_id,
                name: req.body.course.name,
                progress: req.body.course.progress,
            }]
        }
        const data = await User.updateOne({ _id: id}, {
            $push: user
        },{
            upsert: true
        })
        if (!data) throw new Error('No Data Found')

        res.status(200).send(data)
    } catch (err) {
        res.status(200).send(err)
    }
}

const destroy = async (req, res) => {
    try {
        const { id } = req.params
        await User.findByIdAndDelete(id)

        res.status(200).send({ message: 'deleted' })
    } catch (err) {
        res.status(200).send(err)
    }
}


module.exports = {
    index,
    store,
    show,
    update,
    destroy
}