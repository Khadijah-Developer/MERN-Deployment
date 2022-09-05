import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PetForm from "./PetForm";

const AddPet = () => {
  const [pet, setPet] = useState({
    name: "",
    type: "",
    description: "",
    skillOne: "",
    skillTwo: "",
    skillThree: "",
  });
  const [petCreated, setPetCreated] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  //Methods
  const handleChange = (event) => {
    setPet({ ...pet, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setPetCreated(false);
    setErrors([]);
    axios
      .post("http://localhost:8000/api/pet/new", pet)
      .then((response) => {
        setPetCreated(true);
        navigate("/");
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
        if ("keyValue" in data) {
          console.log("keyValue", data.keyValue);
          console.log("keyy", err.response.data);
          errorMessages.push("Name is exists already");
        }
        setErrors(errorMessages);
      });
  };

  return (
    <div className="container mt-5 p-2">
      <div className="d-flex justify-content-between">
        <h1 className="display-4">Pet Shelter</h1>
        <div>
          <Link to="/" className="btn btn-outline-dark m-2">
            Back to Home
          </Link>
        </div>
      </div>
      <h3>Know a pet needing a home?</h3>
      {errors.map((errorMessage, index) => (
        <div key={index} className="alert alert-danger">
          Error: {errorMessage}
        </div>
      ))}
      {petCreated && (
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

export default AddPet;
