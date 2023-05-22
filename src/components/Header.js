import React from 'react';
import face from '../images/face.jpeg';

export default function Header (){

return(
    <header className='header'>
        <img className='header-img' src={face} alt="" />
        <h2 className='header-title'>Meme Generator</h2>
        <h4 className='header-project'>React Course - Project 3</h4>
    </header>
)


}

