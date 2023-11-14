import React from "react";

const Light = (props) => {
    return (
        <div className="light" style={{background:props.color, opacity:props.opacity}}></div>
    );
};
export default Light;