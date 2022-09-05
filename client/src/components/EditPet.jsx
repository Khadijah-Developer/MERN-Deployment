import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PetForm from "./PetForm";

const EditPet = () => {
  //useState
  const [pet, setPet] = useState({
    name: "",
    type: "",
    description: "",
    skillOne: "",
    skillTwo: "",
    skillThree: "",
  });
  const [petUpdated, setPetUpdated] = useState(false);
  const [isIdExist, setIsIdExist] = React.useState(true);

  const [errors, setErrors] = useState([]);

  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  //Methods
  const handleChange = (event) => {
    setPet({ ...pet, [event.target.name]: event.target.value });
  };

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/api/pet/${id}`)
      .then((res) => {
        console.log("pet", res);
        setPet(res.data.pet);
        setLoading(false);
      })
      .catch((err) => {
        console.log("We have an error");
        //navigate("/");
        setIsIdExist(false);
        setLoading(false);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setPetUpdated(false);
    setErrors([]);
    axios
      .put("http://localhost:8000/api/pet/update/" + id, pet)
      .then((response) => {
        setPetUpdated(true);
      })
      .catch((err) => {
        console.log(err);
        const data = err.response.data;
        const errorMessages = [];
        if ("errors" in data) {
          for (let field in data.errors) {
            const validationError = data.errors[field];
            errorMessages.push(validationError.message);
          }
        }
        setErrors(errorMessages);
      });
  };

  return (
    <div className="container mt-5 p-1">
      <div className="d-flex justify-content-between">
        <h1 className="display-4">Pet Shelter</h1>
        <div>
          <Link to="/" className="btn btn-outline-dark m-2">
            Back to Home
          </Link>
        </div>
      </div>
      <h3 className="text-left">Edit {pet.name} </h3>
      {errors.map((errorMessage, index) => (
        <div key={index} className="alert alert-danger">
          Error: {errorMessage}
        </div>
      ))}
      {petUpdated && (
        <div className="alert alert-success">
          User has been successfully created
        </div>
      )}
      <div className="row border">
        <PetForm
          pet={pet}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default EditPet;
