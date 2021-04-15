import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About us</Link>
      </li>
      <li>
        <Link to="/contact">Contact us</Link>
      </li>
      <li>
        <Link to="/support">Support Request</Link>
      </li>
      <li>
        <Link to="/business">Business Solutions</Link>
      </li>
      <li>
        <Link to="/residential">Residential Services</Link>
      </li>
    </ul>
  );
}

export { Navigation };
