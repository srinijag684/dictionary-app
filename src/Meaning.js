import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props){
    console.log(props.meaning);
    return (
        <div>
            <h3>
                {props.meaning.partOfSpeech}
            </h3>
            {props.meaning.definitions.map(function(definition, index){
                return(<div key={index}>
                        <p>
                            <b>Definition:</b>
                            {definition.definition}
                            <br/>

                            <b>Example:</b>
                            <em>{definition.example}</em>

                            <br/>
                            <Synonyms synonyms={definition.synonyms}/>
                        </p>
                    </div>
                );
                
            })}
            
        </div>
    );
    
}