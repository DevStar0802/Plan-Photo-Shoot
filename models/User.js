const { Schema, model, SchemaType } = require('mongoose');
const bcrypt = require('bcrypt')
const { Job } = require('./Job')


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
        },
        jobs: [
            {
                type: Schema.Types.ObjectId,
                ref: 'job'
            }
        ]
    },
    { //TODO: check if this is necessary to add
        toJSON: {
            getters: true,
        },
    }
);

//schema pre function to hash passwords before saving to db
userSchema.pre('save', function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // hash the password using our salt
    bcrypt.hash(user.password, 10, function (err, hash) {
        if (err) return next(err);

        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function (passInput) {
    return bcrypt.compareSync(passInput, this.password);
}


const User = model('user', userSchema);

module.exports = { User };