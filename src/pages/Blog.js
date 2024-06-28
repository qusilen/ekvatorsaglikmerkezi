import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Kalp Sağlığınızı Korumak İçin 10 İpucu',
      date: '15 Haziran 2024',
      summary: 'Kalp sağlığınızı korumak için günlük yaşamınızda dikkat etmeniz gereken 10 önemli ipucu.',
      content: 'Kalp sağlığını korumak, genel sağlığınız için çok önemlidir. İşte kalp sağlığınızı korumak için uygulayabileceğiniz 10 ipucu: düzenli egzersiz yapmak, sağlıklı beslenmek, sigarayı bırakmak, stresten uzak durmak, düzenli sağlık kontrolleri yaptırmak, yeterince uyumak, alkol tüketimini sınırlamak, tansiyonu kontrol altında tutmak, şeker hastalığını yönetmek ve sağlıklı bir kiloda kalmak.',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      title: 'Cilt Bakımı ve Sağlığı Hakkında Bilmeniz Gerekenler',
      date: '25 Mayıs 2024',
      summary: 'Cilt bakımı ve sağlığı konusunda bilinçli olmak, cilt problemlerini önlemenize ve sağlıklı bir cilde sahip olmanıza yardımcı olabilir.',
      content: 'Cilt bakımı ve sağlığı hakkında bilmeniz gerekenler: cilt tipinizi belirleyin ve buna uygun ürünler kullanın, düzenli olarak nemlendirici kullanın, güneş koruyucu krem sürmeyi ihmal etmeyin, cilt temizliğine önem verin, dengeli beslenin ve bol su için, sigara ve alkolden uzak durun, yeterince uyuyun, düzenli egzersiz yapın ve cilt problemleriniz için dermatologdan yardım alın.',
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div style={styles.container}>
      <h1>Blog</h1>
      {blogPosts.map((post, index) => (
        <div key={index} style={styles.postContainer}>
          <div style={styles.imageContainer}>
            <img
              src={post.image}
              alt={post.title}
              style={styles.image}
            />
          </div>
          <div style={styles.textContainer}>
            <h2>{post.title}</h2>
            <p style={styles.date}>{post.date}</p>
            <p style={styles.summary}>{post.summary}</p>
            <Link to={`/blog/${post.id}`} style={styles.readMore}>Devamını Oku</Link>
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
  imageContainer: {
    marginRight: '20px',
  },
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '8px',
  },
  textContainer: {
    flex: 1,
  },
  date: {
    color: '#888',
    fontStyle: 'italic',
  },
  summary: {
    fontWeight: 'bold',
  },
  readMore: {
    marginTop: '10px',
    color: '#007BFF',
    textDecoration: 'none',
    alignSelf: 'flex-end',
  },
};

export default Blog;
