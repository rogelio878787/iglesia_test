import React from 'react'
import './equipoTrabajo.scss';
import Pastores from '../../assets/pastores.jpg'

const equipo = () =>{
    return(
     
      
        
        
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center" id="equipo">

            <h1 className="text-center">Pastores nueva Atzacoalco</h1>
            <img src={Pastores} alt="" className="img-fluid rounded-circle"/>
            <h3 className="text-center">Victor Albarran y Anel Estrada</h3>
            <p className="text-center">Pastores Iglesia Nueva Atzacoalco</p>




        </div>
    )
}

export default equipo;