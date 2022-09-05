const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
 name: { 
        type: String,
        required: [true, 'Name is required'],
        unique: true,
        minLength: [3, 'Name must be at least 3 characters'],
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
        minLength: [3, 'Type must be at least 3 characters'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [3, 'Description must be at least 3 characters'],
    },
    skillOne: {
        type: String,
      //  minLength: [3, 'Skill 1 must be at least 3 characters'],
    },
    skillTwo: {
        type: String,
      //  minLength: [3, 'Skill 2 must be at least 3 characters'],
    },
    skillThree: {
        type: String,
     //   minLength: [3, 'Skill 3 must be at least 3 characters'],
    },
    "1": { opName: { type: String, default: 'like' }, value: Number },
}, { timestamps: true });

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;