import React from 'react';
import './navbar.scss';


const navbar = () =>{
    return(
        <div>

                <nav id="navegacion" className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="#">Iglesia Cristiana Nueva Atzacoalco</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Principal <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Transmisión en vivo</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Eventos
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                   
                    </ul>


                    
                    <div className=" row  my-2 my-lg-0">
                    <div className="col">Fa</div>
                    <div className="col">In</div>
                    <div className="col">You</div>
                    </div>
                    
                </div>
                </nav>
        </div>
    )
}

export default navbar;