import React from "react";

function Links(props){
    return (
      <div>
        <h3>Links</h3>
        <a href={props.linkedin}> {props.github}</a>
        <a href={props.github}> {props.linkedin}</a>
      </div>
    );

}
export default Links;