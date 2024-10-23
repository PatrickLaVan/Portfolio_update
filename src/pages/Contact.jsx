import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = ({id}) => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name:'', email:'', message:''});
  const [isLoading, setIsLoading] = useState(false);

  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

  
  emailjs.send(
    // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    // To Do : die KEYs müssen versteckt werden
    'service_busxf5k',
    'template_2jc34lb',
    {
      from_name: form.name,
      to_name: "Patrick La Van",
      from_email: form.email,
      to_email: 'patricklavan12@gamil.com',
      message: form.message
    },
    'cKbRZg9UoTFnD0m49'
    // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

  ).then(() => {
      setIsLoading(false);
      showAlert({show:true,text:'Message was sent successfully 😃', type:'success'})
      //todo hide an alert

     setTimeout(() => {
            hideAlert(false);
            // setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);


    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
      showAlert({show:true, text:'I didnt recieve your message', type:'danger'})
    })
};

  return (
    <section id={id} className="footer-section">
      <div className="footer-wrapper">
        <div className="footer-top">
          <h1></h1>
        </div>
        <div className="footer-bot">
          <div className="f-1">
            <h1 className='footer-text '>Patrick La Van</h1>
            <h1 className='footer-text'>Sonnentaustrasse 5</h1>
            <h1 className='footer-text'>80995 München</h1>
            <h1 className='footer-text'>Deutschland</h1>
            <h1 className='footer-text'>patricklavan12@gmail.com</h1>
          </div>
          <div className="f-2">            
            <h1 className='footer-list-item'>Grafikdesign</h1>
            <h1 className='footer-list-item'>Illustration</h1>
            <h1 className='footer-list-item'>Animation</h1>
            <h1 className='footer-list-item'>Front-End-Development</h1>
       
          </div>
          <div className="f-3">
            
          </div>
        </div>
      </div>
      <div className="contact-section">
        {alert.show && <Alert {...alert}/>}
        <h1 className="deco-contact">Schick mir ne Nachricht! </h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="form-text"> 
            Name
            <input
              type="text"
              name="name"
              className="contact-input  shadow-card "
              placeholder='Dein Name'
              required 
              value={form.name}
              onChange={handleChange}
            />
          </label><label className="form-text"> 
            E-Mail
            <input
              type="email"
              name="email"
              className="contact-input"
              placeholder='Deine E-Mail Adresse'
              required 
              value={form.email}
              onChange={handleChange}
              
            />
          </label><label className="form-text"> 
            Nachricht
            <textarea
              name="message"
              rows={10}
              className="contact-textarea"
              placeholder='Bei was kann ich dir helfen?'
              required 
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button
            type="submit"
            disabled={isLoading}
            className="form-btn"
          >  
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact