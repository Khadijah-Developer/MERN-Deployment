const Pet = require("../models/pet.model") //Pet model

// return all 
module.exports.findAllPets = (req, res) => {
  //sort 
  var mySort = { type: 1 };
  //.collation({locale: "en" }) dealing with 'A' and 'a' as same language and order
Pet.find({}).collation({locale: "en" }).sort(mySort)
    .then(allPets => res.json({ pets: allPets }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};


// return one 
module.exports.findOneSinglePet = (req, res) => {
	Pet.findOne({ _id: req.params.id })
		.then(oneSinglePet=> res.json({ pet: oneSinglePet }))
		.catch(err => res.status(400).json( err));
};

//create a new 
module.exports.createNewPet = (req, res) => {
  Pet.create(req.body)
    .then(newlyCreatedPet => res.json({ pet: newlyCreatedPet }))
    .catch(err => res.status(400).json( err ));
};

//update exists 
module.exports.updateExistingPet = (req, res) => {
  Pet.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators:true  })
    .then(updatedPet => res.json({ pet: updatedPet }))
    .catch(err => res.status(400).json( err ));
};

//delete a 
module.exports.deleteAnExistingPet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};