import React from 'react';
import './iglesia.scss';

import Iglesia from '../../assets/iglesia.jpeg';

const iglesia = () =>{
    return(
        <div   id="iglesia" className="d-flex flex-column justify-content-center align-items-center">
                    <h2 className="text-center">Iglesia Nueva Atzacoalco</h2>
                    <hr/>
                    <img src={Iglesia} className="img-responsive" alt=""/>
        </div>
    )
}

export default iglesia;