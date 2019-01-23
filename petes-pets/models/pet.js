"use strict";

const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

const PetSchema = new Schema({
    name            : { type: String, required: true }
  , species         : String
  , birthday        : Date
  , picUrl          : String
  , picUrlSq        : String
  , favoriteFood    : String
  , description     : String
},
{
  timestamps: true
});

module.exports = mongoose.model('Pet', PetSchema);
