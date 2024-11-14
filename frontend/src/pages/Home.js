// Complete Rewrite for Home.js - Enhanced with Improved Layout and Usability
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import heroVideo from '../assets/videos/hero-video.mp4';

const Home = () => {
  return (
    <div className="home-container">
      {/* <header className="main-header">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">Cevrem.net</Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/features">Özellikler</Link></li>
            <li><Link to="/about">Hakkımızda</Link></li>
            <li><Link to="/testimonials">Yorumlar</Link></li>
            <li><Link to="/contact">İletişim</Link></li>
            <li><Link to="/register" className="register-button">Kayıt Ol</Link></li>
          </ul>
        </nav>
      </header> */}

      <section className="hero-section">
        <video className="hero-video" autoPlay muted loop>
          <source src={heroVideo} type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Hoş Geldiniz Cevrem.net!</h1>
            <p>Profesyonellerin bir araya geldiği, projelerini sergilediği ve iş fırsatları yarattığı bir networking platformuna hoş geldiniz.</p>
            <Link to="/register" className="cta-button">
              Kayıt Ol ve Başla
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Özelliklerimiz</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fa fa-users feature-icon"></i>
            <h3>Profesyonel Ağınızı Genişletin</h3>
            <p>Kolayca profesyonel ağınızı büyütün ve iş fırsatları yaratın.</p>
          </div>
          <div className="feature-card">
            <i className="fa fa-lightbulb-o feature-icon"></i>
            <h3>Projelerinizi Sergileyin</h3>
            <p>Projelerinizi sergileyin ve potansiyel iş ortakları bulun.</p>
          </div>
          <div className="feature-card">
            <i className="fa fa-bullhorn feature-icon"></i>
            <h3>Bağlantılarla Duyurular Paylaşın</h3>
            <p>Bağlantılarınızla duyurular paylaşın ve işbirliği fırsatları yakalayın.</p>
          </div>
          <div className="feature-card">
            <i className="fa fa-share-alt feature-icon"></i>
            <h3>Sosyal Medya Entegrasyonu</h3>
            <p>Sosyal medya hesaplarınızla profilinizi güçlendirin ve geniş bir çevre oluşturun.</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <h2>Kullanıcı Yorumları</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"Cevrem.net sayesinde birçok yeni bağlantı kurdum ve iş fırsatları yakaladım. Gerçekten harika bir platform!"</p>
            <span>- Ahmet Yılmaz</span>
          </div>
          <div className="testimonial-card">
            <p>"Projelerimi sergileyerek işbirliği yapmak isteyen birçok profesyonelle tanıştım. Cevrem.net'i kesinlikle tavsiye ederim!"</p>
            <span>- Elif Kaya</span>
          </div>
          <div className="testimonial-card">
            <p>"Platformun kullanıcı dostu arayüzü sayesinde kariyerimde büyük bir adım attım. Teşekkürler Cevrem.net!"</p>
            <span>- Mehmet Demir</span>
          </div>
        </div>
      </section>

      <section className="call-to-action-section">
        <h2>Bize Katılın</h2>
        <p>Cevrem.net, sürekli gelişen ve büyüyen bir topluluk olarak, sizleri de aramızda görmekten mutluluk duyar. Şimdi katılın ve profesyonel ağınızı büyütmek için ilk adımı atın!</p>
        <Link to="/register" className="cta-button">
          Şimdi Katılın
        </Link>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">Cevrem.net</Link>
          </div>
          <ul className="footer-links">
            <li><Link to="/features">Özellikler</Link></li>
            <li><Link to="/about">Hakkımızda</Link></li>
            <li><Link to="/contact">İletişim</Link></li>
            <li><Link to="/privacy">Gizlilik Politikası</Link></li>
          </ul>
          <div className="social-media-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Cevrem.net. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
