import React from 'react';
import './Footer.css';

const Footer = () => {

  // Replace links with social media profiles

  return (
    <>
    <footer id="foot" className="flex-row px-1">
        <a href="https://github.com/LohasOT" rel="noopener noreferrer" target="_blank"><img src="https://img.icons8.com/nolan/96/github.png" alt="gitHub" /></a>
        <a href="https://www.linkedin.com/in/oliver-hoang-492b22221/" rel="noopener noreferrer" target="_blank"><img src="https://img.icons8.com/nolan/96/linkedin.png" alt='link' /></a>
    </footer>
    </>

  );
}

export default Footer;
