"use strict";
const mongoosePaginate = require('mongoose-paginate');

mongoosePaginate.paginate.options = {
  limit: 3 // how many records on each page
};

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

PetSchema.plugin(mongoosePaginate);

// Schemas are pluggable.  that is, they allow for applying pre-packaged capabilities to extend their functionality.
// This is a very powerful feature.



module.exports = mongoose.model('Pet', PetSchema);
