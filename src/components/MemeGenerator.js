import React from 'react';
import '../styles.css';
import panicImg from '../images/panicImage.png';

export default function MemeGenerator() {


    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: { panicImg }
    })

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect( () => {
       async function getMeme(){ const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
    
   setAllMemes(data.data.memes)}
   getMeme()
    }, [])

console.log(allMemes);

    function getMemeImage() {
      
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => (
            {
                ...prevMeme,
                randomImage: url
            }
        ))
    }

function handleChange(event){
const {name, value} = event.target;

setMeme(prevMeme => (
    {
        ...prevMeme,
        [name]: value
    }
))

}

    return (
        <main>
            <div className='form'>
                <input 
                className='form-input'              
                type="text" 
                placeholder='top-text' 
                value={meme.topText}
                name='topText'
                onChange={handleChange}
                />

                <input 
                className='form-input'
                 type="text" 
                 placeholder='bottom-text'
                 name='bottomText' 
                 value={meme.bottomText}
                 onChange={handleChange}
                 />

                <button className='form-button' onClick={getMemeImage} >
                    Get a new meme image🖼️
                </button>

            </div>

            <div className='meme'>
                <center>
                    <img className='memeImage' src={meme.randomImage} alt="img" />
                </center>

                <h2 className=" meme-text-top"> {meme.topText}</h2>
                <h2 className=" meme-text-bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )

}