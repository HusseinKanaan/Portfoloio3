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

  return (
    <div className={styles.container}>
      {/* Netlify Forms setup: action und hidden inputs */}
      <form
        name="ContactForm" // Der Name des Formulars für Netlify
        method="POST"
        action="/thank-you" // Seite, die nach dem Senden angezeigt wird
        data-netlify="true" // Aktiviert Netlify Forms
        className={styles.form}
      >
        {/* Versteckte Felder, die Netlify benötigt */}
        <input type="hidden" name="form-name" value="ContactForm" />
        {/* Honeypot-Feld */}
        <div style={{ display: 'none' }}>
          <input
            type="text"
            name="bot-field"
            placeholder="Don't fill this out"
            onChange={handleChange}
          />
        </div>
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
