import React from "react";
const Selections = ({ name, label, onChange, options, data }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label ">
        {label}
      </label>
      <div className="selection">
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={onChange}
        >
          {options.map((option) => (
            <option
              selected={data.genreId === option._id}
              key={option._id}
              value={option._id}
            >
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Selections;
