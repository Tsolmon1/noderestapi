var mongoose = require('mongoose'),
Schema = mongoose.Schema

var NewsSchema = new mongoose.Schema({
  news_title: String,
  news_desc: String,
  //categories: [CategorySc],
  categories : { type: Schema.Types.String, ref: 'Category' },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('News', NewsSchema);
//Create a SomeModel model just by requiring the module



