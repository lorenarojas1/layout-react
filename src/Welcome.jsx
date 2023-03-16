import logo from './img/Grupo 36.svg';
import group1 from './img/Enmascarar grupo 1.png';
import group2 from './img/Enmascarar grupo 2.png';
import group3 from './img/Enmascarar grupo 3.png';
import Header from './Header';
import './styles/Welcome.css';

function WelcomePage() {

  return (
    <>
    <Header />
    <div className="App">
        <div className="App-header">
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
    
  );
}

export default WelcomePage;
