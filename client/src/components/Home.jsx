import React, { useEffect } from "react";
import "./Home.css";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../actions";
import NavBar from "./NavBar";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, []);
  return (
    <div className="fondoHome">
        <div>
            <NavBar/>
        </div>
      <div className="fondoCard">
        {allCountries.map((c) => {
          return (
            <div key={c.id}>
              <Card
                image={c.image}
                name={c.name}
                population={c.population}
                continents={c.continents}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
