import './App.css';
import AddAnimals from './component/AddAnimals';
import AllAnimals from './component/AllAnimals';
import Login from './component/Login';
import Signup from './component/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UpdateAnimals from './component/UpdateAnimals';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/addanimals" element={<AddAnimals />}></Route>
          <Route exact path="/allanimals" element={<AllAnimals />}></Route>
          <Route exact path="/updateanimal/:id" element={<UpdateAnimals />}></Route> 
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
