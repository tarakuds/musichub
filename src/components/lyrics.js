import Axios from 'axios'
import React from 'react'

const Lyrics =()=>{
    const key= '1638fe563a3c3038628e2462ec04af8a'
    const id = '15953433'
    const API_URL='https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id='+id+'?format=json&apikey='+key

    Axios.get(API_URL).then(res=>{
        console.log(res.data.message.body.lyrics);
        var lyricsValue = res.data.message.body.lyrics;

        document.querySelector('.lyrics-details').innerHTML=lyricsValue.lyrics_body
    });

    return (
    <>
    <p className='lyrics-details'></p>
    </>
    );
    
}

export default Lyrics