const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number }
});

module.exports = model('User', schema);