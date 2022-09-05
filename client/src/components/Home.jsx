import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const Home = () => {
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
  return (
    <div className="container mt-5 p-2">
      <div className="d-flex justify-content-start">
        <h1 className="display-4">Pet Shelter</h1>
      </div>
      <div className="d-flex justify-content-end">
        <Link to="/new" className="btn btn-outline-dark m-2">
          add a pet to the shelter
        </Link>
      </div>
      <div className="row">
        <h4>These pets are looking for a good home</h4>
        <table className="table border">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet, idx) => (
              <tr key={idx}>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>
                  <Link to={`/${pet._id}`} className="btn btn-outline-dark m-1">
                    details
                  </Link>
                  |
                  <Link
                    to={`/edit/${pet._id}`}
                    className="btn btn-outline-dark m-1"
                  >
                    edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
