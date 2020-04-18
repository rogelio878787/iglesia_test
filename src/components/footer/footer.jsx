import React from 'react';
import './footer.scss';

const footer = () =>{
    return(
        <div id="footer" className="container-fluid">
            <div className="row align-items-center text-center ">
              
                    <div className="col">
                        <h2>Direccion</h2>
                        <p>dirección</p>
                    </div>

                    <div className="col">
                        <h2>Discipulado</h2>
                        <p>Discupulado</p>
                    </div>

                    <div className="col">
                        <h2>Reuniones dominicales</h2>
                        <p>Reuniones Dominicales</p>
                    </div>

                    <div className="col">
                        <h2>Reuniones de oracion</h2>
                        <p>Reuniones de oración</p>
                    </div>
                
            </div>

        </div>
    )
}

export default footer;