var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
  
  category_name: {type:String, ref: '_id', lowercase: true, unique:true},
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Category', CategorySchema);
