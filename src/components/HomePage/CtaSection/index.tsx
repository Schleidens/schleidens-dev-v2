/* eslint-disable react/no-unescaped-entities */

import { FaLinkedin } from 'react-icons/fa6';
import { FaCloudDownloadAlt } from 'react-icons/fa';

import './style.scss';

const CtaSection = () => {
  return (
    <section className='cta-section'>
      <div className='cta-section__content'>
        <div className='info'>
          <h3>Let's turn visions into reality.</h3>
          <div className='links'>
            <a
              href='https://linkedin.com/in/alectineschleidens'
              target='_blank'
            >
              <span>My Linkedin</span> <FaLinkedin />
            </a>
            <a
              href='https://drive.google.com/file/d/1BEmsDX-fRPlITlgXVqYc6j6HO5HX8ini/view?usp=sharing'
              target='_blank'
              download
            >
              <span>Download my CV</span> <FaCloudDownloadAlt />
            </a>
          </div>
        </div>
        <div className='contact-card'>
          <div className='text'>
            <h4>
              Transform Ideas into Reality with Creative Expertise and Passion!
            </h4>
            <span>Let's make something amazing together.</span>
          </div>
          <a
            href='https://calendly.com/alectineschleidens2016/chat'
            target='_blank'
            rel='noopener noreferrer'
          >
            Book a call
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
