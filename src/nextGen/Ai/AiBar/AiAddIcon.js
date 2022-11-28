import React, { useState } from "react";
import style from "./AiBar.module.css";

function AiAddIcon(props) {
    const [add, setAdd] = useState(false);
    const [name, setName] = useState('');

    return (<div className={style.icon + ' ' + (add ? style.selected : '')} onClick={() => { !add && setAdd(true) }} >
        {!add && <div className={style.addImg} />}
        {add && (<div className={"unselectabe " + style.add}>
            {/*input    */}<input type={'text'} value={name} onChange={(event) => {
                setName(event.target.value)
            }} />

            {/*confirm  */}<div onClick={() => {
                if (name === '') {
                    return;
                }
                props.addAi(name);
                setAdd(false);
                setName('');
            }} className={style.confirm} />

            {/*cancel   */}<div onClick={() => {
                setAdd(false);
                setName('');
            }} className={style.cancel} />
        </div>)}
    </div>);
}

export default AiAddIcon;