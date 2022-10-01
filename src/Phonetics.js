import React from "react";

export default function Phonetics(props){
    console.log(props.phonetic);
    return (
        <div>
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
                listen
            </a>
            {props.phonetic.text}
        </div>
    );
}