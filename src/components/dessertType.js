import React from 'react';
import '../App.css';

export default function DessertType(props) {
    return (
        <div className='flex-container'>
            <img src={props.src} alt={props.type} style={{width: '200px'}} />
            <div style={{width: "800px", textAlign:'center'}}> 
                <p class="a">{props.description}</p> 
            </div>
        </div>
    )
}