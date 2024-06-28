import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
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

  const post = blogPosts.find(post => post.id.toString() === id);

  if (!post) {
    return <div>Blog yazısı bulunamadı.</div>;
  }

  return (
    <div style={styles.container}>
      <h1>{post.title}</h1>
      <p style={styles.date}>{post.date}</p>
      <div style={styles.imageContainer}>
        <img
          src={post.image}
          alt={post.title}
          style={styles.image}
        />
      </div>
      <p style={styles.content}>{post.content}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f0f8ff',
  },
  imageContainer: {
    marginBottom: '20px',
  },
  image: {
    width: '25%',
    height: 'auto',
    borderRadius: '8px',
  },
  date: {
    color: '#888',
    fontStyle: 'italic',
  },
  content: {
    marginTop: '10px',
  },
};

export default BlogPost;
