import React from "react";
import "./dropDown.css";
function DropDown({ data, setDifficultyChange }) {
  return (
    <div className="dropdown">
      <select onChange={(e) => setDifficultyChange(e.target.value)}>
        {data.map((dt, i) => (
          <option key={i} value={dt}>
            {dt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
