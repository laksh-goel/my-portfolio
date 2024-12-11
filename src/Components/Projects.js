import React from 'react';
import ProjectBox from './ProjectBox';
import Rogyaimage from '../images/rogyawebimage.jpg';
import Paasximage from '../images/passxwebimage.jpg';
import Sneakerstoreimage from '../images/sneakerstorewebimage.jpg';
import Sudokuimage from '../images/sudokuimage.jpg';
const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={Rogyaimage} projectName="Rogya" />
        <ProjectBox projectPhoto={Paasximage} projectName="PaasX" />
        <ProjectBox projectPhoto={Sneakerstoreimage} projectName="Sneakers" />
        <ProjectBox projectPhoto={Sudokuimage} projectName="Sudoku" />
      </div>

    </div>
  )
}

export default Projects