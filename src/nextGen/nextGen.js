import React, { useState } from 'react';
import AuthContext from '../additionalFiles/AuthContext';
import Canvas from '../Canvas/Canvas';
import Ai from './Ai/Ai';
import style from "./NextGen.module.css";
import BackButton from './Options/BackButton/BackButton';

import Options from './Options/Options';
import Players from './Players/Players';

function NextGen(props) {
    const [position, setPosition] = useState(0);

    return (
        <AuthContext.Provider value={{
            setPosition: setPosition
        }}>
            <div className={style.main}>
                {position !== 0 && <BackButton />}
                {position === 0 && <Options setPosition={setPosition} />}
                {position === 1 && <Players players={props.get.players} setPlayers={props.set.players} codes={props.get.codes} />}
                {position === 2 && <Ai codes={props.get.codes} setCodes={props.set.codes} />}
                {position === 3 && <Canvas codes={props.get.codes} players={props.get.players} />}
            </div>
        </AuthContext.Provider>
    );
}

export default NextGen;