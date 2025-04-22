import React from "react"
export default function Pad(props) {
    const [isOn, setIsOn] = React.useState(props.on)

    function toggle() {
        setIsOn(prevState => !prevState)
    }

    return (
        <button
            style={{ backgroundColor: props.color }}
            className={isOn ? "on" : "undefined"}
            onClick={toggle}
        ></button>

        
    )
}