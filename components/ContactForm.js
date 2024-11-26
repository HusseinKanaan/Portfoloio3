import Typewriter from './Typewriter';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactForm.module.css'; // Stelle sicher, dass du diese CSS-Datei erstellst.

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_83b0nmr',
      'template_rsfzsqj',
      formData,
      'KNNjw1B_wkvFCYv5W'
    )
      .then((response) => {
        alert('Nachricht erfolgreich gesendet!');
      })
      .catch((err) => {
        alert('Fehler beim Senden der Nachricht.');
      });
  };

  return (
    <div className={styles.container}>
      <div>
{/*       <h2 id='kontakt' className={styles.formHeading}>Kontaktiere Uns</h2> */}
      <form onSubmit={handleSubmit} className="p-4 custom-background-blue">
        <div className="form-group">
          <label htmlFor="name" className={styles.formLabel}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`form-control ${styles.formInput}`}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className={styles.formLabel}>E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`form-control ${styles.formInput}`}
          />
        </div>
        <div className="form-group">
          <label htmlFor="anliegeBudget" className={styles.formLabel}>Telefon</label>
          <input
            type="text"
            id="telefon"
            name="telefon"
            value={formData.name}
            onChange={handleChange}
            required
            className={`form-control ${styles.formInput}`}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className={styles.formLabel}>Nachricht</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={`form-control ${styles.formTextarea}`}
          />
        </div>
        <button type="submit" className={`btn btn-primary w-100 ${styles.submitButton}`}>
          Nachricht senden
        </button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;