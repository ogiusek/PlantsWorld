import React from 'react';
import style from "./Options.module.css";

import OptionsButton from './OptionsButton/OptionsButton';

function Options(props) {
    return (
        <div className={style.main}>
            <OptionsButton setPosition={props.setPosition} value={1} text={'Players'} />
            <OptionsButton setPosition={props.setPosition} value={2} text={'Ai'} />
            <OptionsButton setPosition={props.setPosition} value={3} text={'Exit'} />
        </div>
    );
}

export default Options;