const { Schema, model } = require('mongoose');

// Schema to create user model
const userSchema = new Schema(
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
            min_length: 8,
            max_length: 50,
        }
    },
    { //TODO: check if this is necessary to add
        toJSON: {
            getters: true,
        },
    }
);

userSchema.pre('save', async function () {
    await hashPassword();
});

const User = model('user', userSchema);

module.exports = User;