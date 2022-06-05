import React, {useState} from "react";
import { UseFecth } from "./usefetch";
import { CardsPoke } from "./cards/Cards";
import './pokemon.css';

const Pokemon = ({name}) => {
    const [url, setUrl]=useState(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const estado = UseFecth(url)
    const {cargando, data} = estado
    cargando?  console.log('cargando'):console.log(data.forms);

    console.log("esto que", name);


    return (<div>
        {
            cargando
            ?
            <h1>Cargando...</h1>
            :
            <div>
            <CardsPoke results={data.forms}/>
            
            </div>
        }
    </div>)
}

export default Pokemon