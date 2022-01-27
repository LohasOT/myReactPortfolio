import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

const Footer = () => {

  // Replace links with social media profiles

  return (
    <>
    <footer id="foot" className="flex-row px-1">
        <a href="https://github.com/Abraham-Solis" rel="noopener noreferrer" target="_blank"><img src="https://img.icons8.com/nolan/96/github.png" alt="gitHub" /></a>
        <a href="https://www.linkedin.com/in/abraham-solis-b08bb3194/" rel="noopener noreferrer" target="_blank"><img src="https://img.icons8.com/nolan/96/linkedin.png" alt='link' /></a>
    </footer>
    </>

  );
}

export default Footer;
