import React from 'react'
import axios from 'axios'

const Tracklist=(props)=>{
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1?format=json&apikey=1638fe563a3c3038628e2462ec04af8a`).then(res =>{ 
        var detailed_list=res.data.message.body.track_list;


        // USING MAPS
        const info =  detailed_list.map(item => {
            //  console.log(item.track.album_name)
             var answers = item.track.album_name
             return answers;  
         });
         info.forEach(item => {
             console.log(item)
             document.querySelector('.change').innerHTML=item
             
         });
         console.log(info);
                });

    return (
        <>
                <p className='change'>This is it</p>
                 <li>Yes</li>
                 <li>{props.info}</li>
        </>
               
                 )
}



export default Tracklist