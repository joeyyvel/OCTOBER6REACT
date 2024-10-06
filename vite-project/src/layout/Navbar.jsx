import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div>
        <h1>hello navbar</h1>
      </div>
      <div className="myLink">
        <p>
          <Link to="/">Home To Do List</Link>
        </p>
        <p>
          <Link to="/bedroom">Bedroom</Link>
        </p>
        <p>
          <Link to="/diningroom">DiningRoom</Link>
        </p>
        <p>
          <Link to="/livingroom">LivingRomm</Link>
        </p>
      </div>
    </>
  );
}

export default Navbar;
