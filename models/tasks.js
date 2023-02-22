const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name of the task is required'],
        trim: true,
        maxlength: [20, 'Name can not exceed 20 char']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)