import React from "react";

function Entry(props) {
    return (
        <div className="term">
            <span className="planetName"> {props.name} </span>
            <img src={props.URL} alt=""></img>
            <dt>
                <dd> {props.description} </dd>
            </dt>
        </div>
    )
}

export default Entry;