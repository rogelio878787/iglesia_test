import React from 'react';
import './section.scss';

const Section = props =>{
    return(
        <div className="container-fluid" id="section">

            <div id="section" className="row" style = {{backgroundColor:`${props.colorFondo}`}}>
                <div className="col d-flex flex-column justify-content-center">
                    <h2 className="text-center" style={{color:`${props.colorLetra}`}}>{props.title}</h2>
                    <hr/>
                    <p className="text-center" style={{color:`${props.colorLetra}`}}>{props.subtitle}</p>



                </div>
            </div>

    

        </div>
    )
}

export default Section;