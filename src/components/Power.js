import React from "react";

function Power({ power, handlePower }) {
  return (
    <h3 id="power">
      Turn:
      <button
        onClick={handlePower}
        id="power-btn"
        style={
          power
            ? { backgroundColor: "firebrick" }
            : { backgroundColor: "limegreen" }
        }
      >
        {" "}
        {power ? "Off" : "On"}
      </button>
    </h3>
  );
}

export default Power;
