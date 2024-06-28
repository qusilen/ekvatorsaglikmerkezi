import React from 'react';

const ManagementBoard = () => {
  const boardMembers = [
    {
      name: 'Dr. Ahmet Yılmaz',
      position: 'Başkan',
      bio: 'Dr. Ahmet Yılmaz, 20 yıllık sağlık sektörü deneyimi ile Ekvator Sağlık Merkezi’nin kurucusudur.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Dr. Ayşe Demir',
      position: 'Başkan Yardımcısı',
      bio: 'Dr. Ayşe Demir, cerrahi alandaki uzmanlığı ve yenilikçi yaklaşımları ile tanınmaktadır.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Dr. Mehmet Kaya',
      position: 'Üye',
      bio: 'Dr. Mehmet Kaya, hastane yönetimi ve sağlık hizmetlerinde kalite konularında uzmanlaşmıştır.',
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div style={styles.container}>
      <h1>Yönetim Kurulu</h1>
      <div style={styles.gridContainer}>
        {boardMembers.map((member, index) => (
          <div key={index} style={styles.memberContainer}>
            <div style={styles.imageContainer}>
              <img
                src={member.image}
                alt={member.name}
                style={styles.image}
              />
            </div>
            <div style={styles.infoContainer}>
              <h2>{member.name}</h2>
              <h3>{member.position}</h3>
              <p>{member.bio}</p>
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
  memberContainer: {
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

export default ManagementBoard;
