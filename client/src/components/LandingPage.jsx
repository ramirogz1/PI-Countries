import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="fondoLanding">
      <h1>Countries-SPA</h1>
      <Link to="/home">
        <button type="button" className="btn btn-info btn-lg">
          Ingresar
        </button>
      </Link>
    </div>
  );
}

//export default LandingPage
