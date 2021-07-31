const mongoose = require("mongoose");

const { Schema } = mongoose;

const todoSchema = new Schema({
    title: {type:String, required: true},
    desc: {type: String, required: true}
}, {autoCreate: true});
  
const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;