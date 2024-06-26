import React from 'react';
import MyMap from '../components/MyMap';

function Contact() {
  return (
    <div className="contact-container">
      <h2>İletişim</h2>
      <div className="map-container">
        <MyMap />
      </div>
      <div className="contact-info">
        <p>Telefon: +90 123 456 7890</p>
        <p>Mail: ekvatorsaglikmerkezi@gmail.com</p>
        <p>Adres: İncili Mahallesi 2008 Sokak No: 10/B, Afyon Emirdağ</p>
        {/* Additional contact information or other content */}
      </div>
    </div>
  );
}

export default Contact;
