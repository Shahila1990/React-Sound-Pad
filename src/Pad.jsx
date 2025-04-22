import React from "react"
export default function Pad(props) {
    

    // function toggle() {
    //     setIsOn(prevState => !prevState)
    // }

    return (
        <button
            style={{ backgroundColor: props.color }}
            className={props.on ? "on" : "undefined"}
            onClick={() =>props.toggle(props.id)}
        ></button>

        
    )
}