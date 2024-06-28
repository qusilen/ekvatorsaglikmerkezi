// src/components/PageContainer.js
import React from 'react';
import { Link } from 'react-router-dom';

const PageContainer = ({ title, description, buttonText, link, image }) => {
  return (
    <div style={styles.postContainer}>
      <div style={styles.textContainer}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={link}>
          <button style={styles.button}>{buttonText}</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  postContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '20px',
    backgroundColor: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    padding: '20px',
  },
  textContainer: {
    flex: 1,
  },
  button: {
    marginTop: '10px',
    backgroundColor: '#007BFF',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default PageContainer;
