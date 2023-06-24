import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getActivities } from "../actions";



export default function NavBar() {

    const dispatch = useDispatch()
    const allActivities = useSelector((state)=>state.activities)
    useEffect(()=> {
        dispatch(getActivities())
    },[])
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
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
              <select className="form-select" aria-label="Default select example" defaultValue="All">
              <option value='All'>All</option>
                <option value='Europe'>Europe</option>
                <option value="Asia">Asia</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Oceania">Oceania</option>
                <option value="Africa">Africa</option>

              </select>
            </li>
            <li className="nav-item">
              <select className="form-select" aria-label="Default select example" defaultValue='All'>
                <option value='All'>All</option>
               {allActivities.map((a)=>(<option value={a.name}>{a.name}</option>))}
              </select>
            </li>
            <li className="nav-item">
              <select className="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </li>
            <li className="nav-item">
              <select className="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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
