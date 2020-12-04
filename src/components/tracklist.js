import React from 'react'
import axios from 'axios'
import icon from '../assets/music_icon.png'
//import styled from 'styled-components'

const Tracklist=(props)=>{
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1?format=json&apikey=1638fe563a3c3038628e2462ec04af8a`).then(res =>{ 
        var detailed_list=res.data.message.body.track_list;

        //  console.log(info);
         console.log(detailed_list[0])


         var content = document.querySelector('.contain')
         let contentNew=""
         

         detailed_list.forEach(item => {
             contentNew += `
             <Cards>
             <img className='cards-img' src=${icon} alt="card icon" srcSet=""/>
                 <div className='right'>
                 <h4 className='title'>${item.track.track_name}</h4>
                 <p className='artist'>By: ${item.track.artist_name} </p>
                 <button><a href=${item.track.track_id}>VIEW LYRICS</a></button>
                 </div>
             </Cards>
                	
             `
             content.innerHTML = contentNew
            console.log(item)
             });
                });

    return <></>
}



export default Tracklist