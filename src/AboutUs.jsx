import Header from './Header';
import './styles/Welcome.css'

function AboutUsPage() {

  return (
    <>
      <Header />
      <div className="App">
        <div className="App-about-us">
          <h3>Nosotros</h3>
          <p className='description-about-me'>
            Nuestro equipo de expertos en instalación de vidrio trabaja en
            colaboración con los arquitectos y diseñadores para lograr la visión
            del proyecto. Comenzamos evaluando los requisitos del diseño y las
            necesidades de los clientes para determinar que tipo de vidrio es el
            más adecuado para el proyecto. Luego trabajamos en conjunto con los
            ingenieros para determinar las resistencia y las especificaciones
            necesarias para cumplir con las normas de seguridad.
          </p>
        </div>
        <div>
    <a className='footer-link' href='/'> ← Regresar</a>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
