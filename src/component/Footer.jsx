import React from 'react';
import { FacebookOutlined } from '@ant-design/icons';
import { InstagramOutlined } from '@ant-design/icons';
import { LinkedinOutlined } from '@ant-design/icons';
import { TwitterOutlined } from '@ant-design/icons';
import { GoogleOutlined } from '@ant-design/icons';
import { AppleOutlined } from '@ant-design/icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <h2>विराट इन्फर्म्याटिक्स प्रा. लि.</h2>
          <h4>हाम्रो टिम</h4>
          <ul>
            <li>अध्यक्ष : सुदीर नेपाल</li>
            <li>सम्पादक : उमेश शर्मा</li>
            <li>प्रविधि : प्रकाश उजेली</li>
            <li>जनसम्पर्क अधिकृत : प्रियंका शर्मा</li>
          </ul>
        </div>

        <div className="footer-middle">
          <h4>सम्पर्क</h4>
          <ul>
            <li>📄 सूचना विभाग दर्ता नं. YYY-०७१/७२</li>
            <li>📍 कमलपोखरी, काठमाडौं, नेपाल</li>
            <li>📞 +९७७-९८५१०-५१५१५</li>
            <li>✉️ info@biratinfo.com</li>
          </ul>
        </div>

        <div className="footer-right">
          <div className="footer-icons">
            <FacebookOutlined />
            <TwitterOutlined />
            <InstagramOutlined />
            <LinkedinOutlined />
          </div>
          <p>एप डाउनलोड गर्नुहोस्</p>
          <div className="store-buttons">
            <div className="store-item">
            <GoogleOutlined style={{ fontSize: '20px', marginRight: '0.5rem' }} />
            <span>Google Play Store</span>
           </div>
           <div className="store-item">
              <AppleOutlined style={{ fontSize: '20px', marginRight: '0.5rem' }} />
              <span>App Store</span>
           </div>
          </div>

        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p>Copyright © 2025 BIRAT Informatics Pvt. Ltd. | A Product of SRIYOG Consulting</p>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Advertise</a>
        </div>
      </div>

      <p className="tech-partner">
        Technology Partner SRIYOG Consulting Pvt. Ltd. , Kathmandu, Nepal
      </p>
    </footer>
  );
}
