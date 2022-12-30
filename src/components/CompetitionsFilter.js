import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const CompetitionsFilter = ({ competitions }) => {
  // react hooks
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
   
  } = context;

  // get unique types
  let types = getUnique(competitions, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  
  return (
    <section className="filter-container">
      <Title title="Галерея" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type"> Конкурс</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
      </form>
    </section>
  );
};

export default CompetitionsFilter;