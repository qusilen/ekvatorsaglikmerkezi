import React from 'react';

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Elif Aydın',
      specialty: 'Kardiyolog',
      bio: 'Dr. Elif Aydın, kalp ve damar hastalıkları alanında uzman olup 15 yıldır hizmet vermektedir.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Dr. Can Yılmaz',
      specialty: 'Ortopedist',
      bio: 'Dr. Can Yılmaz, ortopedi ve travmatoloji uzmanı olarak 10 yıldır hastalarına hizmet sunmaktadır.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Dr. Ayşe Kaya',
      specialty: 'Dermatolog',
      bio: 'Dr. Ayşe Kaya, dermatoloji alanında uzman olup cilt hastalıkları ve tedavileri konusunda deneyimlidir.',
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div style={styles.container}>
      <h1>Hekimlerimiz</h1>
      <div style={styles.gridContainer}>
        {doctors.map((doctor, index) => (
          <div key={index} style={styles.doctorContainer}>
            <div style={styles.imageContainer}>
              <img
                src={doctor.image}
                alt={doctor.name}
                style={styles.image}
              />
            </div>
            <div style={styles.infoContainer}>
              <h2>{doctor.name}</h2>
              <h3>{doctor.specialty}</h3>
              <p>{doctor.bio}</p>
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  doctorContainer: {
    display: 'flex',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  imageContainer: {
    flex: '1 1 150px',
    padding: '10px',
    borderRight: '1px solid #ccc',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
  },
  infoContainer: {
    flex: '2 1 250px',
    padding: '20px',
  },
};

export default Doctors;
