import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from '../banner1.jpg';
import banner2 from '../banner2.jpg';
import banner3 from '../banner3.jpg';
import PageContainer from '../components/PageContainer';

const Home = () => {
  return (
    <div className="home">
      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000} showThumbs={false}>
        <div>
          <img src={banner1} alt="Banner 1" />
        </div>
        <div>
          <img src={banner2} alt="Banner 2" />
        </div>
        <div>
          <img src={banner3} alt="Banner 3" />
        </div>
      </Carousel>
      <div style={styles.container}>
        <PageContainer
          title="Hakkımızda"
          description={
            <>
              Ekvator Sağlık Merkezi olarak, hastalarımızın sağlığına değer veren ve güvenilir sağlık hizmetleri sunan bir kuruluşuz.
              <br />
              Hakkımızda daha fazla bilgi edinmek için bizi keşfedin.
            </>
          }
          buttonText="Detaylar"
          link="/about"
        />
        <PageContainer
          title="Yönetim Kurulu"
          description={
            <>
              Ekvator Sağlık Merkezi'nin stratejik yönetiminden sorumlu yönetim kurulumuz hakkında bilgi edinin. 
              <br />
              Kurumsal yönetimde şeffaflık ve etik değerlerle hareket ediyoruz.
            </>
          }
          buttonText="Detaylar"
          link="/board"
        />
        <PageContainer
          title="Misyon & Vizyon"
          description={
            <>
              Sağlıkta kalite, güven ve yenilikçilik anlayışımızla topluma değer katmayı misyon ediniyoruz. 
              <br />
              Vizyonumuz, herkes için erişilebilir ve yüksek kaliteli sağlık hizmetleri sunmaktır.
            </>
          }
          buttonText="Detaylar"
          link="/mission"
        />
        <PageContainer
          title="Hekimlerimiz"
          description={
            <>
              Deneyimli hekimlerimizle tanışın. 
              <br />
              Sağlık sorularınız için size en uygun uzmana danışın ve güvenle tedavi olun.
            </>
          }
          buttonText="Detaylar"
          link="/doctors"
        />
        <PageContainer
          title="Tıbbi Birimler"
          description={
            <>
              Çeşitli tıbbi uzmanlık alanlarında sunduğumuz hizmetler hakkında detaylı bilgi almak için tıbbi birimlerimizi keşfedin. 
              <br />
              Sağlığınız bizim önceliğimizdir.
            </>
          }
          buttonText="Detaylar"
          link="/departments"
        />
        <PageContainer
          title="Blog"
          description={
            <>
              Sağlık ipuçlarından güncel tıbbi yeniliklere kadar sağlık dünyasından haberler için blogumuzu ziyaret edin. 
              <br />
              Sağlığınıza dair en güncel bilgiler burada!
            </>
          }
          buttonText="Detaylar"
          link="/blog"
        />
        <PageContainer
          title="Galeri"
          description={
            <>
              Sağlık merkezimizin modern ve konforlu ortamını galerimizde keşfedin. 
              <br />
              İç mekan fotoğraflarıyla sağlık deneyiminin keyfini çıkarın.
            </>
          }
          buttonText="Detaylar"
          link="/gallery"
        />
        <PageContainer
          title="İletişim"
          description={
            <>
              Ekvator Sağlık Merkezi'ne ulaşmak için iletişim bilgilerimizle sizleri bekliyoruz. 
              <br />
              Sağlık hizmetleri ve randevu talepleriniz için bize kolayca ulaşabilirsiniz.
            </>
          }
          buttonText="Detaylar"
          link="/contact"
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f0f8ff',
  },
};

export default Home;
