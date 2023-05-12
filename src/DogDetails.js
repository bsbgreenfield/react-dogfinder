import React from "react";
import { useParams } from "react-router-dom";
import {v4 as uuid} from 'uuid'


function DogDetails({dogs}){
    const params = useParams()
    const thisDog = dogs.find(({name}) => name.toLowerCase() === params.name)
    return (
        <>
            <h2>{thisDog.name}</h2>
            <div>
                {thisDog.facts.map(fact => <p key={uuid()}>{fact}</p>)}
            </div>
        </>
       
    )
}

export default DogDetails