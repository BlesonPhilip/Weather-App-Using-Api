import React from "react";
import Foot from "../components/Foot";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>

      <div className="h">
        Explore Current Weather<br></br>
        <div>
          <Link to="/weather">
            <button>Check Weather</button>
          </Link>
        </div>
      </div>

      <Foot></Foot>
    </div>
  );
};

export default Home;
