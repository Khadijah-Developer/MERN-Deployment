import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteButton = (props) => {
  const { pet, petId, successCallback } = props;
  const navigate = useNavigate();
  const deleteProject = (e) => {
    axios
      .delete("http://localhost:8000/api/pet/delete/" + petId)
      .then((res) => {
        successCallback();
        navigate("/");
      });
  };
  return (
    <button className="btn btn-danger m-1" onClick={deleteProject}>
      Adopt {pet.name}
    </button>
  );
};

export default DeleteButton;
