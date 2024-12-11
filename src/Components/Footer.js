import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Lakshya Goel</h4>
      <h4>Copyright &copy; 2024 LG</h4>
      <div className='footerLinks'>
        <a href="https://github.com/laksh-goel" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/lakshya-goel-5b25b6229/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:goellakshya09@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/laksh_goel/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer