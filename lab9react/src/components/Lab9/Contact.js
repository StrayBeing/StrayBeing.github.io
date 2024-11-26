import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formularz wysłany!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page-container contact-page">
      <h1>Kontakt</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Imię:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Wiadomość:
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        </label>
        <br />
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}

export default Contact;
