import React from "react";
import style from "./AiBlocks.module.css";

import Block from "./Block";

function AiBlocks(props) {
    const length = props.code.length;
    return (<div className={style.blocks}>
        {
            props.code.map((element, index) => {
                return (<Block
                    key={index}
                    value={element}
                    upArrow={index !== 0}
                    downArrow={index !== length - 1}

                    replace={props.replace}
                    remove={props.remove}

                    index={index} />);
            })
        }
    </div>);
}

export default AiBlocks;