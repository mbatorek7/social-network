const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Input valid email"]
    },
    thoughts: [{type: Schema.Types.ObjectId, ref:"Thoughts"}],
    friends: [{type: Schema.Types.ObjectId, ref:"User"}]
}, 
{
    toJSON: {
        virtuals: true
    }
});

userSchema.virtual("friendCount").get(function() {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;