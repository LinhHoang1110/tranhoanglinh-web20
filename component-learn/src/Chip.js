import React from 'react'
import './chip.css';

// props same tham so trong function

const Chip = (props) => {
    console.log(props.color)
    return (
        <div>
            <div className="chip-name">
                {props.name}
            </div>
            <div className={` chip-background ${props.color} `}>
                {props.text}
            </div>
        </div>
    );
}

export default Chip;