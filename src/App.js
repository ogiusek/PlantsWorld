import React, { useState } from 'react';
import style from "./App.module.css";

import player from './additionalFiles/initPlayer';
import defaultAi from './additionalFiles/defaultAi';

import NextGen from './NextGen/NextGen';
import Canvas from './Canvas/Canvas';

function App() {
  const [players, setPlayers] = useState([player]);
  const [codes, setCodes] = useState([defaultAi]);
  const [money, setMoney] = useState(0);
  const [simulates, setSimulates] = useState(false);

  const get = { players: players, money: money, codes: codes };
  const set = { money: setMoney, players: setPlayers, simulates: setSimulates, codes: setCodes }

  return (
    <React.Fragment>
      {
        simulates ?
          <Canvas get={get} set={set} /> :
          <NextGen get={get} set={set} />
      }
    </React.Fragment>
  );
}

export default App;