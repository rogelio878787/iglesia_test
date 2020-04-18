import React from 'react';
import './jumbotronPage.scss';




const jumbotronPage = (props) =>{
    
    return(
     <div className={`jumbotron text-left d-flex flex-column justify-content-center ${props.alineacion}`} 
          id="jumbotronMain"
          style={{backgroundImage:`url(${props.imageUrl})`}}
          
          >
        <div className="group">
        <h1 className="display-4">Casa del Alfarero</h1>
        <p className="lead">This is |a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
       
        <p class="lead">
            <a className="btn btn-outline-light" href="#" role="button">Transmision en vivo</a>
        </p>

        </div>
    </div>
    )
}

export default jumbotronPage;