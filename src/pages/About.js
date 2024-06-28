import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src="/img/photo1.jpg"
          alt="Ekvator Sağlık Merkezi"
          style={styles.image}
        />
      </div>
      <div style={styles.textContainer}>
        <h1>Hakkımızda</h1>
        <p>
          Ekvator Sağlık Merkezi, sağlık hizmetlerinde mükemmellik ve hasta memnuniyeti
          odaklı çalışmaları ile tanınan bir sağlık kuruluşudur. Modern tıbbi cihazlar ve
          alanında uzman doktor kadromuz ile hastalarımıza en iyi hizmeti sunmayı
          hedefliyoruz.
        </p>
        <p>
          Kuruluşumuzdan bu yana, sağlığınız için en doğru çözümleri sunmayı misyon
          edindik. Her geçen gün gelişen tıbbi teknolojileri yakından takip ederek,
          hizmetlerimizi sürekli olarak yeniliyoruz. Hasta haklarına saygılı, etik değerlere
          bağlı ve güvenilir bir sağlık merkezi olmanın gururunu yaşıyoruz.
        </p>
        <p>
          Ekvator Sağlık Merkezi olarak, siz değerli hastalarımızın ihtiyaçlarına yönelik
          kişiselleştirilmiş tedavi planları hazırlıyoruz. Sağlığınızı korumak ve yaşam
          kalitenizi artırmak için buradayız. Bizimle iletişime geçmekten çekinmeyin; sağlığınız
          bizim önceliğimizdir.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    padding: '20px',
    backgroundColor: '#f0f8ff',
  },
  imageContainer: {
    flex: 1,
    paddingRight: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  textContainer: {
    flex: 2,
  },
};

export default AboutUs;
