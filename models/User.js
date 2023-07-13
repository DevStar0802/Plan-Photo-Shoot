const { Schema, model } = require('mongoose');

// Schema to create user model
const studentSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            max_length: 50,
        },
        lastName: {
            type: String,
            required: true,
            max_length: 50,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            max_length: 60,
        },
        password: { //TODO: apply appropriate validators for password
            type: String,
            required: true,
            max_length: 50,
        }
    },
    { //TODO: check if this is necessary to add
        toJSON: {
            getters: true,
        },
    }
);

const User = model('user', studentSchema);

module.exports = User;