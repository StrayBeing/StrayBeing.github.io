"use client";

import Form from '@components/Form'; // Importujemy komponent formularza

const KontaktPage = () => {
  const handleFormSubmit = (data) => {
    alert(`Formularz wysłany: ${JSON.stringify(data)}`);
  };

  return (
    <div>
      <h2>Kontakt</h2>
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default KontaktPage;