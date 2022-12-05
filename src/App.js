import React, { useEffect, useState } from 'react';
import style from "./App.module.css";

import player from './additionalFiles/initPlayer';
import defaultAi from './additionalFiles/defaultAi';

import NextGen from './NextGen/NextGen';

function App() {
  const [players, setPlayers] = useState([player]);
  const [codes, setCodes] = useState([{ name: defaultAi.name, ai: Array.from(defaultAi.ai) }]);
  const [money, setMoney] = useState(0);

  useEffect(() => {
    let array = Array.from(players);
    array[0].code = codes[0];
    setPlayers(array);
  }, []);

  const get = {
    players: players,
    money: money,
    codes: codes
  };

  const set = {
    money: setMoney,
    players: setPlayers,
    codes: setCodes
  }

  return (
    <React.Fragment>
      {/* { */}
      {/* simulates ? */}
      {/* <Canvas get={get} set={set} /> : */}
      <NextGen get={get} set={set} />
      {/* } */}
    </React.Fragment>
  );
}

export default App;