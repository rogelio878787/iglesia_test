import React from 'react';
import './transmisionVivo.scss';

const transmisionVivo = () =>{
    return(
        <div id ="transmisionVivo" className=" d-flex flex-column justify-content-center align-items-center">
            <h2 >Transmision en vivo</h2>
            <iframe  className="text-center frame" width="560" height="315" src="https://www.youtube.com/embed/iJCV_2H9xD0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


        </div>
    )
}

export default transmisionVivo;