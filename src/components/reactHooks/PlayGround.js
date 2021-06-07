import React from 'react'
import { useState, useEffect, useRef} from 'react'


function PlayGround() {
    const [colors, setColors] = useState([])
    const myInputRef = useRef(null)

    // setColors(["red", "pink"])
    // return () => setColors([])
    useEffect(() => {
        console.log("Color update:", colors);
    }, [colors]);
    return (
        <div style={{padding:"2rem"}}>
            <input ref={myInputRef}/>
            <button onClick={() => myInputRef.current.focus()}>Click</button>

            <button onClick={() =>
            setColors(["red", "blue"])}>submit colors</button>

            <p>Here are my favorite colors</p>
            <p>{colors.length ? colors : "I have none"}</p>
        </div>
    )
}

export default PlayGround
