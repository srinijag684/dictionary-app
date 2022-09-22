import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

function Dictionary()
{
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState({});

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function search(event){
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse)
    }


    function handleChange(event){
        setKeyword(event.target.value);
    }

    return( <div className="component">
        <form onSubmit={search}>
            <input type={"text"} placeholder="Search" autoFocus={true} onChange={handleChange}/>
            <input type={"submit"} />
        </form>
        <Results results={results}/>
    </div> 
);
}

export default Dictionary;