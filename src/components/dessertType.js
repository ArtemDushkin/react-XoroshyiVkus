import React from 'react';
import '../App.css';
import { Button } from 'react-bootstrap';

export default function DessertType(props) {
    return (
        <div className='flex-container'>
            <img src={props.src} alt={props.type} style={{width: '200px'}} />
            <div style={{width: "800px", textAlign:'center'}}> 
                <p class="a">{props.description}</p> 
                <Button>Выбрать</Button>
            </div>
        </div>
    )
}