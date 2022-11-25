import React, { useState } from "react";
// import style from "./Player.module.css";
import style from "./AddPlayer.module.css";

function AddPlayer(props) {
    const [add, setAdd] = useState(false);
    const [name, setName] = useState('');

    return (<div className={style.icon + ' ' + (add ? style.selected : '')} onClick={() => { !add && setAdd(true) }} >
        {!add && <div className={style.addImg} />}
        {add && (<div className={"unselectabe " + style.add}>
            {/*input    */}<input type={'text'} value={name} onChange={(event) => {
                setName(event.target.value)
            }} />

            {/*confirm  */}<div onClick={() => {
                props.addPlayer(name);
                setAdd(false);
            }} className={style.confirm} />

            {/*cancel   */}<div onClick={() => {
                setAdd(false);
            }} className={style.cancel} />
        </div>)}
    </div>);
}

export default AddPlayer