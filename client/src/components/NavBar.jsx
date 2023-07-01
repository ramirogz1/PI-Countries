import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getActivities,
  filterContinents,
  filterActivities,
  orderByName,
  orderByPopulation,
} from "../actions";
import "./NavBar.css";

export default function NavBar() {
  const dispatch = useDispatch();
  const allActivities = useSelector((state) => state.activities);
  const [orden, setOrden] = useState("");

  
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  function handleFilterContinents(e) {
    dispatch(filterContinents(e.target.value));
  }

  function handleFilterActivities(e) {
    dispatch(filterActivities(e.target.value));
  }
  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setOrden(e.target.value);
  }

  function handleSort2(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setOrden(e.target.value);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          Countries-SPA :D
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue="Continents"
                onChange={(e) => handleFilterContinents(e)}
              >
                <option disabled>Continents</option>

                <option value="All">All</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Oceania">Oceania</option>
                <option value="Africa">Africa</option>
              </select>
            </li>
            <li className="nav-item">
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue="Activities"
                onChange={(e) => handleFilterActivities(e)}
              >
                <option disabled>Activities</option>
                <option value="All">All</option>
                {allActivities.map((a) => (
                  <option key={a.id} value={a.name}>
                    {a.name}
                  </option>
                ))}
              </select>
            </li>
            <li className="nav-item">
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue="Order"
                onChange={(e) => handleSort(e)}
              >
                <option disabled>Order</option>
                <option value="asc">A to Z</option>
                <option value="des">Z to A</option>
              </select>
            </li>
            <li className="nav-item">
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue="Population"
                onChange={(e) => handleSort2(e)}
              >
                <option disabled>Population</option>
                <option value="high">High</option>
                <option value="low">Low</option>
              </select>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
