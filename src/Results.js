import React from "react";
import Meaning from "./Meaning";

function Results(props){
    console.log(props.results);
    if(props.results === {})
    {
        return null;
    }
    else
    {
        return(<div className="Results">
            <h2>{props.results.word}</h2>
            <h3>{props.results.phonetic}</h3>
            
        </div>
        );
    }
}

    

export default Results;