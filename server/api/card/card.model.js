'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CardSchema = new Schema({
  hanzi: String,
  pinyin: String,
  translation: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Card', CardSchema);