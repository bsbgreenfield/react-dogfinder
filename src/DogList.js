import React from "react";
import {v4 as uuid} from 'uuid'
import { Link } from "react-router-dom";


function DogList({dogs}){
    return(
        <div className="container">
             <ul>
                {dogs.map(dog => {
                    return(
                        <li key={uuid()}>
                            <span>
                            Name: <Link to= {`/dogs/${dog.name.toLowerCase()}`}>
                            {dog.name}
                            </Link>
                            </span>
                            <div>Age: {dog.age}</div>
                            
                        </li>
                    )
                })}   
            </ul>
       
        </div>
       
    )
}

export default DogList