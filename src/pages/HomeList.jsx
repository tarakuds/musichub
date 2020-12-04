import styled from 'styled-components'
import icon from '../assets/music_icon.png'
import Tracklist from '../components/Tracklist'


function HomeList(){
    // console.log(List);
    return(
        <Mainlist>
            <h1 className='change'>TOP 10 MUSIC TRACKS IN THE US</h1>

            <div className="contain">
            
                <div className="cards">
                    <p>TOP 10 MUSIC TRACKS IN THE US</p>
                    <img src={icon} alt="card icon" srcSet=""/>
                    <Tracklist info='{info[2]}' />
                </div>
            </div>

        </Mainlist>
    )
}

const Mainlist= styled.div`
    
    margin-top:5%;
    text-align:center;
.change{
    font-size:3rem;
    font-weight:700;
    margin-top: 10%;
}

.contain{
    background-color:#fff;
    width:50%;
    margin:5%;
}
`

export default HomeList