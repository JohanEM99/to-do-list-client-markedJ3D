// ========================================
// src/components/Footer/Footer.tsx
// ========================================
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>3D TECHNE</h3>
            <p>3D Printing Solutions for Your Business</p>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@3DTechne.com</p>
            <p>Phone: +1 (920) 770 – 2277</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/custom-designs">Custom Designs</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 3D Techne. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;