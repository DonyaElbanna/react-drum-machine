import React from "react";
import { Key } from "./Key";

export const Drumpad = ({ audios, playSound, power }) => {
  return (
    <div className="drum-pad">
      {power
        ? audios.map((audio) => (
            <Key
              key={audio.key}
              audio={audio}
              playSound={playSound}
              power={power}
            />
          ))
        : audios.map((audio) => (
            <Key
              key={audio.key}
              audio={{ ...audio, src: "/" }}
              playSound={playSound}
              power={power}
            />
          ))}
    </div>
  );
};
