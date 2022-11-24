import React, { useState } from 'react';
import style from "./App.module.css";

import player from './additionalFiles/initPlayer';
import defaultAi from './additionalFiles/defaultAi';

import NextGen from './NextGen/NextGen';
import Canvas from './Canvas/Canvas';

function App() {
  const [players, setPlayers] = useState([player]);
  const [codes, setCodes] = useState({ default: defaultAi });
  const [money, setMoney] = useState(0);
  const [simulates, setSimulates] = useState(false);

  const get = { players: players, money: money, codes: codes };
  const set = { money: setMoney, players: setPlayers, simulates: setSimulates, codes: setCodes }

  return (
    <div>
      {
        simulates ?
          <NextGen get={get} set={set} /> :
          <Canvas get={get} set={set} />
      }
    </div>
  );
}

export default App;