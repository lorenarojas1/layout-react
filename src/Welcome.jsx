import { useState, useEffect } from 'react';
import logo from './img/Grupo 36.svg';
import group1 from './img/Enmascarar grupo 1.png';
import group2 from './img/Enmascarar grupo 2.png';
import group3 from './img/Enmascarar grupo 3.png';
import Header from './Header';
import './styles/Welcome.css';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

function WelcomePage() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

const [isVisible, setIsVisible] = useState(false);

useEffect(() => {   
  window.addEventListener("scroll", listenToScroll);
  return () => 
     window.removeEventListener("scroll", listenToScroll); 
}, []);

const listenToScroll = () => {
  let heightToHideFrom = 1000;
  const winScroll = document.body.scrollTop || 
      document.documentElement.scrollTop;
  /*setHeight(winScroll)*/;

  if (winScroll > heightToHideFrom) {  
       isVisible && setIsVisible(true);
  } else {
       setIsVisible(true);

  }  
};


  return (
    <>

    <ScrollContainer>
    <div className='App-index'>
 
    {
        isVisible 
         && 
         <div id='hide' className='header-position'>
      <Header />
      </div>
      }

    


        <ScrollPage className='size'>
          <div className="App-header">
            <Animator className="App-header" width='100%' animation={FadeUp}>

              <img src={logo} className="App-logo" alt="logo" />
              <p className='description'>
                La correcta instalación de vidrio es crucial para el éxito de un
                diseño aequitectonico. Utilizamos técnicas avanzadas y herramientas de
                última generación para cumplir con los requisitos de diseño y las
                necesidades de nuestros clientes, asegurando una instalación segura y
                precisa.
              </p>

            </Animator>
          </div>
        </ScrollPage>

        <div className="App-intro">
          <div className='container-project'>
            <figure className='container-image'>
              <img src={group1} className="Image-project" alt="Valle de Bravo" />
              <figcaption className='caption'>Valle de Bravo</figcaption>
            </figure>
          </div>
          <hr className='line-separate' />
          <div className='container-project'>
            <figure className='container-image'>
              <img src={group2} className="Image-project" alt="Valle de Bravo" />
              <figcaption className='caption'>Ciudad de México</figcaption>
            </figure>

          </div>
          <hr className='line-separate' />
          <div className='container-project'>
            <figure className='container-image'>
              <img src={group3} className="Image-project" alt="Valle de Bravo" />
              <figcaption className='caption'>Ciudad de México</figcaption>
            </figure>
          </div>
          <div className='footer-button'>
            <a href='#'>Ver más proyectos → </a>
          </div>
        </div>


      </div>
    </ScrollContainer></>

  );




  /*return (
    <>
    <Header />
    <div className="App">
        <div id= "hide" className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className='description'>
            La correcta instalación de vidrio es crucial para el éxito de un
            diseño aequitectonico. Utilizamos técnicas avanzadas y herramientas de
            última generación para cumplir con los requisitos de diseño y las
            necesidades de nuestros clientes, asegurando una instalación segura y
            precisa.
          </p>
        </div>
        <div className="App-intro">
        <div className='container-project'>
          <figure className='container-image'>
            <img src={group1} className="Image-project" alt="Valle de Bravo" />
            <figcaption className='caption'>Valle de Bravo</figcaption>
          </figure>
        </div>
        <hr className='line-separate'/>
        <div className='container-project'>
          <figure className='container-image'>
            <img src={group2} className="Image-project" alt="Valle de Bravo" />
            <figcaption className='caption'>Ciudad de México</figcaption>
          </figure>

        </div>
        <hr className='line-separate'/>
        <div className='container-project'>
          <figure className='container-image'>
            <img src={group3} className="Image-project" alt="Valle de Bravo" />
            <figcaption className='caption'>Ciudad de México</figcaption>
          </figure>
        </div>
        <div className='footer-button'>
          <a href='#'>Ver más proyectos → </a>
        </div>
        </div>
  
      </div></>
    
  );*/
}

export default WelcomePage;
