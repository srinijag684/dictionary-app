import React, {useState} from "react";
import "./Dictionary.css";

function Dictionary()
{
    let [keyword, setKeyword] = useState("");

    function search(event){
        event.preventDefault();
        alert(`searching for ${keyword}`);
    }

    function handleChange(event){
        setKeyword(event.target.value);
    }

    return( <div className="component">
        <form onSubmit={search}>
            <input type={"text"} placeholder="Search" autoFocus={true} onChange={handleChange}/>
            <input type={"submit"} />
        </form>
    </div> 
);
}

export default Dictionary;