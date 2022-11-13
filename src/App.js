import "./App.css";
import React, { useState } from "react";
import { Drumpad } from "./components/Drumpad";
import Power from "./components/Power";
import Volume from "./components/Volume";

const audios = [
  {
    key: "Q",
    keyCode: 81,
    name: "Heater 1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "W",
    keyCode: 87,
    name: "Heater 2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    keyCode: 69,
    name: "Heater 3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    keyCode: 65,
    name: "Heater 4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    keyCode: 83,
    name: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    keyCode: 68,
    name: "Open-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    keyCode: 90,
    name: "Kick-n'-Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    keyCode: 88,
    name: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    keyCode: 67,
    name: "Closed-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function App() {
  const [name, setName] = useState("");
  const [power, setPower] = useState(true);
  const [volume, setVolume] = React.useState(0.5);

  const playSound = (key, name) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    setName(name);
  };

  const handlePower = () => {
    setPower(!power);
    setName("");
  };

  const handleVolume = (e) => {
    setVolume(e.target.value);
  };

  const setKeyVolume = () => {
    const sounds = audios.map((audio) => document.getElementById(audio.key));
    sounds.forEach((sound) => {
      if (sound) {
        sound.volume = volume;
      }
    });
  };

  return (
    <div className="app">
      <h1 id="title">Drum Machine</h1>
      <div className="drum-machine">
        {" "}
        {setKeyVolume()}
        <Drumpad audios={audios} playSound={playSound} power={power} />
        <div className="display">
          <Power power={power} handlePower={handlePower} />
          <h3 id="sound">Sound: {power ? name : ""}</h3>
          <Volume volume={volume} handleVolume={handleVolume} power={power} />
        </div>
      </div>
    </div>
  );
}

export default App;
