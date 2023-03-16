import Header from './Header';

function ContactPage() {
  return (
    <>
    <Header />
    <div className="App">
      <div className="App-contact">
    <form className='form-contact'>
        <p className='title'>Contáctanos</p>
        <input className='input-form' type="text" name="name" id="name" placeholder='Nombre' required></input>
        <input className='input-form' type="text" name="email" id="email" placeholder='Correo' required></input>
        <textarea className='input-form message' type="text" name="message" id="message" placeholder='Mensaje' required></textarea>
        
        <button className='btn-form'>Enviar</button>
    </form>
</div>
<div className='footer-button'>
    <a className='footer-link' href='/'> ← Regresar</a>
</div>
      </div></>
    
  );
}

export default ContactPage;
