const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    option: String,
    votes: {
        type: Number,
        default: 0
    },
});

// const pollSchema = new mongoose.Schema({
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     options: [optionSchema],
//     championsBlue: [String],
//     championsRed: [String],
//     voted: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
// });

const pollSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    options: [optionSchema],
    topBlue: String,
    jungleBlue: String,
    midBlue: String,
    botBlue: String,
    supportBlue: String,
    topRed: String,
    jungleRed: String,
    midRed: String,
    botRed: String,
    supportRed: String,
    voted: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});


module.exports = mongoose.model('Poll', pollSchema);