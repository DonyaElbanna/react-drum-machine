import React from "react";
import { useEffect } from "react";

export const Key = ({
  audio: { key, keyCode, name, src },
  playSound,
  power,
}) => {
  const handleKeydown = (e) => {
    if (keyCode === e.keyCode) {
      playSound(key, name);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
  }, []);

  return (
    <button id={keyCode} onClick={() => playSound(key, name)} disabled={!power}>
      {key}
      <audio id={key} className="clip" src={src} />
    </button>
  );
};
