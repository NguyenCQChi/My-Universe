import React from "react";

function Form(props) {
    return (
        <div className="form-center">
            <form onSubmit={props.onClick} >
            <input type="text" name="dataName" placeholder="YYYY-MM-DD"/>
            <button> Search </button>
            </form>
        </div>
    )
}

export default Form;