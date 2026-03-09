import React from 'react';

const TOC = ({}) => {
  return (
    <>
      <nav>
        <header>
          <h3 className={`subhead mb-xs`}>Table of contents</h3>
        </header>
        <p>
          <i>
            This is a working document. I’ll update this with more information
            shortly. Please reach out if there’s something you’d like me to add.
          </i>
        </p>
        <ul className='contents'>
          <li>
            <a href='#objectives'>Today’s objectives</a>
          </li>
          <li>
            <a href='#snd'>Society for News Design</a>
          </li>
          <li>
            <a href='#thinking_digital'>Thinking in digital</a>
          </li>
          <li>
            <a href='#basic'>Basic digital skills</a>
          </li>
          <li>
            <a href='#anatomy'>Anatomy of an infographic</a>
          </li>
          <li>
            <a href='#simple_charts'>Simple charts</a>
          </li>
          <li>
            <a href='#complex'>Diagrams and complex charts</a>
          </li>
          <li>
            <a href='#about'>About me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TOC;
