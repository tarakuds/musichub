import styled from 'styled-components';
import icon from '../assets/music_icon.png';
import {useState} from 'react';
import HomeList from './HomeList';
import Lyrics from '../components/Lyrics';

function Home(){
    const [showValue, setValue]=useState(false);

    function view(){
        setValue(!showValue);
    }

    return (
        <>
        <MusicImage>
            <Icon className='icons' behavior="alternate" direction="right"  scrollamount="1">
            <img src={icon} alt="music logo"/>
            </Icon>

            <button className='view-btn' onClick={view}>OPEN LIBRARY</button>


            
        </MusicImage>

        {showValue &&(
                        <>
                            <HomeList></HomeList>
                            <Lyrics />
                        </>
                        
                )
            }
        

        </>
    )
}

const MusicImage = styled.div`
    border:1px solid #fff;
    border-radius:10px ;
    text-align: center;
    height:50vh;
    margin:5% 25%;
    padding: 5% 0;

.view-btn{
    background-color:#fff;
    padding: 2% 5%;
    color:#00f;
    outline:none;
    font-weight:700;
    margin:5% 0;
    border:none;
    border-radius:25px;
}

.btn-click{
    color:#fff;
}
`
const Icon = styled.marquee`
    height:40vh;

`
// const View = styled.button`

// `

export default Home