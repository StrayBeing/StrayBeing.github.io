import React, { CSSProperties } from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div style={styles.cardContainer}>
      {imageUrl && <img src={imageUrl} alt={title} style={styles.image} />}
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  cardContainer: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  title: {
    fontSize: '1.5rem',
    margin: '16px 0 8px',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default Card;