const { Schema, model } = require('mongoose')

const courseSchema = new Schema({
    course_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    progress: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
})

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    courses: [courseSchema]
}, {
    timestamps: true,
    collection: 'users'
})

const user = model('User', userSchema)

module.exports = user