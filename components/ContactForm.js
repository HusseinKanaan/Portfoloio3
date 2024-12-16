import React, { useState } from 'react';
import styles from './ContactForm.module.css'; // Styles für die Komponente

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Funktion zum Senden des Formulars (Hier könntest du API-Calls oder andere Logiken einbauen)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Hier könnte eine API-Anfrage oder eine andere Logik eingebaut werden, um das Formular zu verarbeiten.
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ihr Name"
          required
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ihre E-Mail-Adresse"
          required
          className={styles.input}
        />
        <input
          type="text"
          name="telefon"
          value={formData.telefon}
          onChange={handleChange}
          placeholder="Ihre Telefonnummer"
          required
          className={styles.input}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Ihre Nachricht"
          required
          className={styles.textarea}
        />
        <button type="submit" className={styles.button}>
          Nachricht senden
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
