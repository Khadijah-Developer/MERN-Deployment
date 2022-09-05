const PetController = require('../controllers/pet.controller');

module.exports = app => {
  app.get("/api/pets/", PetController.findAllPets); 
  app.get("/api/pet/:id", PetController.findOneSinglePet);
  app.put("/api/pet/update/:id", PetController.updateExistingPet);
  app.post("/api/pet/new", PetController.createNewPet);
  app.delete("/api/pet/delete/:id", PetController.deleteAnExistingPet);
};
