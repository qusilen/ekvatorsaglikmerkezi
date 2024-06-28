import React from 'react';

const MedicalDepartments = () => {
  const departments = [
    {
      name: 'Kardiyoloji',
      description: 'Kalp ve damar hastalıklarının tanı ve tedavisinde uzmanlaşmış birimimiz.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Ortopedi',
      description: 'Kemik, eklem ve kas hastalıklarının tedavi edildiği birimimiz.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Dermatoloji',
      description: 'Cilt hastalıkları ve tedavileri konusunda uzmanlaşmış birimimiz.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Nöroloji',
      description: 'Beyin ve sinir hastalıklarının tanı ve tedavisinde uzman birimimiz.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Gastroenteroloji',
      description: 'Sindirim sistemi hastalıklarının tanı ve tedavisinde uzmanlaşmış birimimiz.',
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div style={styles.container}>
      <h1>Tıbbi Birimlerimiz</h1>
      <div style={styles.gridContainer}>
        {departments.map((department, index) => (
          <div key={index} style={styles.departmentContainer}>
            <div style={styles.imageContainer}>
              <img
                src={department.image}
                alt={department.name}
                style={styles.image}
              />
            </div>
            <div style={styles.infoContainer}>
              <h2>{department.name}</h2>
              <p>{department.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f0f8ff',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
  departmentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  imageContainer: {
    marginBottom: '10px',
  },
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
  },
  infoContainer: {
    textAlign: 'center',
  },
};

export default MedicalDepartments;
