import React, { useState } from 'react';
import AuthContext from '../additionalFiles/AuthContext';
import Ai from './Ai/Ai';
import style from "./NextGen.module.css";
import BackButton from './Options/BackButton/BackButton';

import Options from './Options/Options';
import Players from './Players/Players';

function NextGen(props) {
    const [position, setPosition] = useState(0);
    const [players, setPlayers] = useState(props.get.players);
    const [codes, setCodes] = useState(props.get.codes);

    return (
        <AuthContext.Provider value={{
            setPosition: setPosition
        }}>
            <div className={style.main}>
                {position !== 0 && <BackButton />}
                {position === 0 && <Options setPosition={setPosition} />}
                {position === 1 && <Players setPosition={setPosition} players={players} setPlayers={setPlayers} codes={codes} />}
                {position === 2 && <Ai setPosition={setPosition} codes={codes} setCodes={setCodes} />}
            </div>
        </AuthContext.Provider>
    );
}

export default NextGen;