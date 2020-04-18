import React from 'react';

//components 


import Navbar from '../navbar/navbar';
import JumbotronPage from '../jumbotronPage/jumbotronPage';
import Informacion from '../informacion/informacion';
import RedesSociales from '../redes_sociales/redes_sociales';

import Section from '../../components/section/section';
import Equipo from '../../components/equipo de trabajo/equipoTrabajo';
import Footer from '../../components/footer/footer';
import Iglesia from '../../components/iglesia/iglesia';
import TransmisionVivo from '../../components/transmisionVivo/transmisionVivo';



const home = () =>{
    return(
        <div>

            <Navbar/>
          
            <JumbotronPage
            
            alineacion = 'align-items-center'
            imageUrl = 'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1136&q=80'
            />


            <Section
            title = "lorem lorem lorem lorem"
            subtitle = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quas doloribus tempora alias aspernatur deleniti nemo tempore porro vitae debitis?    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quas doloribus tempora alias aspernatur deleniti nemo tempore porro vitae debitis?"
            colorLetra = '#6305F'
            colorFondo = '#f4f4f2'
            ></Section>


            <JumbotronPage
            
            alineacion = "align-items-start"
            imageUrl = "https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
            
            />


            <div className="row no-gutters">
                <div className="col-sm-12 col-md-6">
                    <Section
                    
                    title="this is an example"
                    subtitle = "this is an exmaple this is an exmaple this is an exmaple this is an exmaple"
                    />


                </div>

                <div className="col-sm-12 col-md-6">
                <Section
                    colorFondo = "#1F1F1F"
                    colorLetra = "white"
                    title="this is an example"
                    subtitle = "this is an exmaple this is an exmaple this is an exmaple this is an exmaple"
                    />

                </div>

                

            </div>

            <Iglesia/>


            <Equipo></Equipo>


            <TransmisionVivo/>

            <Footer/>

        </div>
        
    )
}


export default home;