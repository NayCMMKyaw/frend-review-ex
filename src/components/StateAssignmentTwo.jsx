import React, { useState} from "react";
import '../styles/SAT.css';

function StateAssignmentTwo(){
    const [numbers, setNumber] = useState([]);

    const clickHandler =()=>{
        const result = Math.floor(Math.random()*10);
        setNumber([...numbers,result]);
    };
    return (
        <section>
            <button onClick={clickHandler}>Click me!</button>
            <ul>
                {
                    numbers.map((e,index)=>{
                        return <li key={index}>{e}</li>
                    })
                }
            </ul>
        </section>
    );
}
export default StateAssignmentTwo;