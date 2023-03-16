import Header from './Header';
import group1 from './img/Enmascarar grupo 1.png';
import group2 from './img/Enmascarar grupo 2.png';
import group3 from './img/Enmascarar grupo 3.png';
import './styles/Welcome.css';

function ProjectsPage() {
  return (
    <>
    <Header />
    <div className="App">
        <div className="">
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
        <a className='footer-link' href='/'> ← Regresar</a>
        </div>
        </div>
      </div></>
    
  );
}

export default ProjectsPage;
