import React from "react";

function Volume({ volume, handleVolume, power }) {
  return (
    <div>
      <h3 id="volume">Volume: {Math.round(volume * 100)}%</h3>
      <input
        max="1"
        min="0"
        step="0.01"
        type="range"
        value={volume}
        onChange={handleVolume}
        disabled={!power}
        title="volume"
      />
    </div>
  );
}

export default Volume;
