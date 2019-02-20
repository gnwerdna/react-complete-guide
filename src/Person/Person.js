import React from 'react'
import classes from './Person.module.css'
const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>My name is {props.name}, i'm {props.age} years old</p>
            <input 
                type="text"
                onChange={props.changed} 
                value={props.name}/>
        </div>
    )

}

export default person