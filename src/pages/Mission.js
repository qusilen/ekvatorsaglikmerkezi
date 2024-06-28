import React from 'react';

const MissionVision = () => {
  return (
    <div style={styles.container}>
      <h1>Misyon ve Vizyon</h1>
      <div style={styles.section}>
        <h2>Misyonumuz</h2>
        <p>
          Ekvator Sağlık Merkezi olarak misyonumuz, sağlık hizmetlerinde mükemmellik
          sağlamak ve hastalarımıza en yüksek kalitede bakım sunmaktır. Tıbbi etik
          değerlere bağlı kalarak, hasta haklarına saygı gösteren ve sürekli gelişen bir
          sağlık merkezi olmayı hedefliyoruz.
        </p>
      </div>
      <div style={styles.section}>
        <h2>Vizyonumuz</h2>
        <p>
          Vizyonumuz, sağlık sektöründe yenilikçi çözümler sunarak, uluslararası
          standartlarda bir sağlık merkezi olarak tanınmaktır. Sağlık alanındaki
          gelişmeleri yakından takip ederek, hasta memnuniyetini ve sağlık hizmetlerinde
          kalitemizi sürekli artırmayı amaçlıyoruz.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f0f8ff',
    borderRadius: '8px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  section: {
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
};

export default MissionVision;
