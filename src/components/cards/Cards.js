import React from "react";
import { CardPokemon } from "./CardPokemon";
import './CardsPoke.css';

export const CardsPoke = ({results}) => {
    return (
        <div className='container'>
            <ul className='cards'>
                {
                   results.map(p=>(
                    <li className='card-item' key={p.name}>
                        <CardPokemon url={p.url}/>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}