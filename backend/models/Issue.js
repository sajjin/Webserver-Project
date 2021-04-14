const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

let Issue = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
});

const a = mongoose.model('Issue', Issue);
module.exports = a