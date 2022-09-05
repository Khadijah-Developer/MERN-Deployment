import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import io from "socket.io-client";
import DeleteButton from "./DeleteButton";
const socket = io.connect(":8000");

const ViewPet = () => {
  const [pet, setPet] = useState({
    name: "",
    type: "",
    description: "",
    skillOne: "",
    skillTwo: "",
    skillThree: "",
    1: { opName: "", value: 0 },
  });
  const [isLoading, setLoading] = useState(false);
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
        setLoading(false);
      });
  }, []);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets/")
      .then((res) => {
        console.log(res);
        setPets(res.data.pets);
      })
      .catch((err) => console.error(err));
  }, []);
  const removeFromDom = (petId) => {
    setPets(pets.filter((pet) => pet._id !== petId));
  };

  const [likes, setLikes] = useState(0);

  // Include a button to like a pet, disable it when clicked until the component reloads
  const handleLikes = (e) => {
    setLikes(likes + 1);
    e.currentTarget.disabled = true;
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
      <div className="d-flex justify-content-between">
        <h1 className="">Details about:</h1>
        <div>
          <DeleteButton
            pet={pet}
            petId={pet._id}
            successCallback={() => removeFromDom(pet._id)}
          />
        </div>
      </div>
      <div className="row border border-dark m-1 p-5">
        <div className="col">
          <h4>Type:</h4>
          <h4>Description:</h4>
          <h4>Skills</h4>
        </div>
        <div className="col">
          <h4> {pet.type}</h4>
          <h4>{pet.description}</h4>
          <h4>{pet.skillOne}</h4>
          <h4>{pet.skillTwo}</h4>
          <h4>{pet.skillThree}</h4>
        </div>
        <div className="d-flex justify-content-evenly">
          <button className="btn btn-primary m-2" onClick={handleLikes}>
            Like
          </button>
          <h5 className="m-2"> {likes} Likes</h5>
        </div>
      </div>
    </div>
  );
};

export default ViewPet;
