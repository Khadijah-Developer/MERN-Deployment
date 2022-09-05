import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import AddPet from "./components/AddPet";
import EditPet from "./components/EditPet";
import ViewPet from "./components/ViewPet";
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/new" element={<AddPet/>} />
          <Route exact path="/:id" element={<ViewPet/>} />
          <Route exact path="/edit/:id" element={<EditPet/>} />
     
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
