import React from "react";
import style from "./AiInterface.module.css";

import DefaultBlocks from "./Blocks/DefaultAiBlocks";
import AiBlocks from "./Blocks/AiBlocks";
import AiSpecifications from "./AiSpecifications";
import aiEnum from "../../../additionalFiles/aiEnum";

function AiInterface(props) {
    // codes setCodes index
    const addBlock = (block) => {
        if (props.codes[props.index].ai.length < 10) {
            let array = Array.from(props.codes);
            array[props.index].ai.push(aiEnum[block]);
            props.setCodes(array);
        }
    };

    const replace = (from, to) => {
        let array = Array.from(props.codes[props.index].ai);
        const element = array[from];
        array[from] = array[to];
        array[to] = element;
        let object = Array.from(props.codes);
        object[props.index].ai = array;
        props.setCodes(object);
    };

    const rename = (name) => {
        let array = Array.from(props.codes);
        array[props.index].name = name;
        props.setCodes(array);
    };

    const removeBlock = (indexToRemove) => {
        let array = Array.from(props.codes);
        array[props.index].ai = array[props.index].ai.filter((element, index) => {
            return indexToRemove != index;
        });
        props.setCodes(array);
    }

    const removeAi = () => {
        let array = Array.from(props.codes);
        if (array.length < 2) {
            return;
        }
        array = array.filter((element, index) => {
            return props.index != index;
        });
        props.setCodes(array);
        props.setSelected(0);
    }

    return (<div className={style.main}>
        <DefaultBlocks addBlock={addBlock} />
        <AiBlocks replace={replace} remove={removeBlock} code={props.codes[props.index].ai} />
        <AiSpecifications rename={rename} name={props.codes[props.index].name} remove={removeAi} />
    </div>);
}

export default AiInterface;