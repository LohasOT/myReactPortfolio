import React from 'react';
import './Footer.css';

const Footer = () => {

  return (
    <>
    <footer id="foot" className="flex-row px-1">
        <a href="https://github.com/LohasOT" rel="noopener noreferrer" target="_blank"><img src="https://img.icons8.com/nolan/96/github.png" alt="gitHub" /></a>
        <a href="https://www.linkedin.com/in/oliver-hoang-492b22221/" rel="noopener noreferrer" target="_blank"><img src="https://img.icons8.com/nolan/96/linkedin.png" alt='link' /></a>
    </footer>
    <br></br>
    <div className="footer">
        <p>@Copyright 2022 Oliver Hoang</p>
    </div>
    </>

  );
}

export default Footer;
