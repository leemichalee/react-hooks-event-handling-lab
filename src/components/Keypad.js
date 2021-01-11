// Code Keypad Component Here
import React from 'react'

function Keypad() {

    function changeHandler() {
        console.log("Entering password...")
    }
    return (
        <input type="password" onChange={changeHandler}/>
    )
}
export default Keypad