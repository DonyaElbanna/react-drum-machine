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
              audio={{
                ...audio,
                src: "https://ia800206.us.archive.org/16/items/SilentRingtone/silence_64kb.mp3",
              }}
              playSound={playSound}
              power={power}
            />
          ))}
    </div>
  );
};
