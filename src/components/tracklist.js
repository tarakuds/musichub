import React from 'react'
import axios from 'axios'

const Tracklist=(props)=>{
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1?format=json&apikey=1638fe563a3c3038628e2462ec04af8a`).then(res =>{ 
        // var detailed_list=res.data.message.body.track_list;
        var detailed_list=res.data.message.body.track_list;

        // USING MAPS
        const info =  detailed_list.map(item => {
            //  console.log(item.track.album_name)
             var answers = item.track.album_name
             return answers;  
         });
         
         document.querySelector('.title').innerHTML=detailed_list[0].track.track_name;
         document.querySelector('.artist').innerText=detailed_list[0].track.artist_name;
         console.log(info);
         console.log(detailed_list[0])

        //  info.forEach(item => {
        //     console.log(item)
            
            
        // });
                });

    return <button>VIEW LYRICS</button>
}



export default Tracklist