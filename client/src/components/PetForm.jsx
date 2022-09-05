

const PetForm = (props) => {
  const {pet ,handleChange,handleSubmit } = props;
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
     
            <div className="form-group row m-2">
              <label className="col-sm-2 col-form-label text-primary h1">
                Pet Name:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control m-1"
                  name="name"
                  onChange={handleChange}
                  value={pet.name}
                />
              </div>

              <label className="col-sm-2 col-form-label text-primary h1">
                Pet Type:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control m-1"
                  name="type"
                  onChange={handleChange}
                  value={pet.type}
                />
              </div>

              <label className="col-sm-2 col-form-label text-primary h1">
                Pet Description:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control m-1"
                  name="description"
                  onChange={handleChange}
                  value={pet.description}
                />
              </div>
            </div>

    
            <h5>Skills (optional):</h5>
            <label className="col-sm-2 col-form-label text-primary h1">
              Skill 1:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control m-1"
                name="skillOne"
                onChange={handleChange}
                value={pet.skillOne}
              />
            </div>

            <label className="col-sm-2 col-form-label text-primary h1">
              Skill 2:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control m-1"
                name="skillTwo"
                onChange={handleChange}
                value={pet.skillTwo}
              />
            </div>

            <label className="col-sm-2 col-form-label text-primary h1">
              Skill 3:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control m-1"
                name="skillThree"
                onChange={handleChange}
                value={pet.skillThree}
              />
            </div>
          </div>
        

        <button className="btn btn-primary m-2">Submit</button>
      </form>
    </div>
  );
};

export default PetForm;
