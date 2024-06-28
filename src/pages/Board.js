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
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f0f8ff',
  },
  memberContainer: {
    display: 'flex',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRight: '1px solid #ccc',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
  },
  infoContainer: {
    flex: 2,
    padding: '10px 20px',
  },
};

export default ManagementBoard;
