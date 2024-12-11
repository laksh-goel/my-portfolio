import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    SneakersDesc : "This website is a landing page of shoes but for Sneakerheads. It is a responsive website which was made to understand Javascript and playing with CSS properties. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    SneakersGithub : "https://github.com/laksh-goel/Sneakers-for-you",
    SneakersWebsite : "https://sneakersforyou.netlify.app/",

    RogyaDesc : "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",
    RogyaGithub : "https://github.com/laksh-goel/Rogya",
    RogyaWebsite : "https://rogya-lakshgoel1630.netlify.app/",

    PaasXDesc:"Paasx is a password manager. It is an attempt to improve password usability and security, enabling users to create unique, complex passwords for every online account without needing to remember them.",
    PaasXGithub:"https://github.com/laksh-goel/passx-password-manager",
    PaasXWebsite:"https://passx-laksh-password-manager.netlify.app/",
    
    SudokuDesc:"The Sudoku Solver Project uses OpenCV, Machine Learning and backtracking algorithms to solve Sudoku puzzles faster and more efficiently. There are three main steps involved in making a computer a Sudoku-solving wizard. These include image loading, resizing and processing, digit recognition, and grid cell extraction.",
    SudokuGithub:"https://github.com/laksh-goel/Sudoku-game",
    SudokuWebsite:"https://letsplaysudokugame.netlify.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox