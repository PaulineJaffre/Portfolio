import 'src/components/Contact/contact.scss'
import { useState } from 'react';


function Contact() {
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici la logique pour traiter les données du formulaire, par exemple, envoi à un serveur.
    console.log('Données du formulaire:', formData);
  };

  return (
    <div className="contact-form">
      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit}>
        <label>Nom</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows="4"
          required
        />

        <button type="submit">Envoyer</button>
      </form>
      
    </div>
  );
}

export default Contact;