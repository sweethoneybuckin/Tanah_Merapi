// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import SocialMediaIcon from '../../shared/components/SocialMediaIcon';
import { MapPin } from 'lucide-react';
import instagramLogo from '../../images/instagram.png';
import tiktokLogo from '../../images/tiktok.png';
import whatsappLogo from '../../images/whatsapp.png';

const Footer = ({ socialMedia }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-title">
              <span className="title-line">Tana</span>
              <span className="title-line">Merapi</span>
            </h3>
            
          </div>
          
          <div className="footer-info footer-center">
            <p className="footer-description">
              Wisata kedai alam outdoor, petik jeruk dan jeep di lereng Gunung Merapi
              dengan pemandangan yang indah dan suasana yang menyegarkan.
            </p>

            {/* Social Media Icons */}
            <div className="footer-social-media">
              <a 
                href="https://instagram.com/tana_merapi"
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link"
              >
                <img 
                  src={instagramLogo} 
                  alt="Instagram"
                />
              </a>
              <a 
                href="https://tiktok.com/@tanamerapimovement"
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link"
              >
                <img 
                  src={tiktokLogo} 
                  alt="TikTok"
                />
              </a>
              <a 
                href="https://wa.me/6285713555331"
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link"
              >
                <img 
                  src={whatsappLogo} 
                  alt="WhatsApp"
                />
              </a>
            </div>
          </div>
          
          <div className="footer-social">
            <div className="social-icons">
              {socialMedia.map((social) => (
                <SocialMediaIcon 
                  key={social.id}
                  platform={social.platform}
                  url={social.url}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {year} Tana Merapi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;