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
                <img className='cards-img' src={icon} alt="card icon" srcSet=""/>
                    <div className='right'>
                    <p className='title'>TOP 10 MUSIC TRACKS IN THE US</p>
                    <p className='artist'>TOP 10 MUSIC TRACKS IN THE US</p>
                    <Tracklist info='{info[2]}' />
                    </div>
                </div>
            </div>

        </Mainlist>
    )
}

const Mainlist= styled.div`
    background-color:#fff;
    margin-top:5%;
    text-align:center;
.change{
    font-size:3rem;
    font-weight:700;
    margin-top: 10%;
}

.contain{
    width:50%;
    margin:5%;
    display:flex;
}
.cards{
    background-color:#00f;
    padding:3% 1%;
    height:30vh;
    width:50%
}
.cards-img{
    width: 20%;
    height:auto;
}
.right{
    border:1px solid #fff;
    float:right;
    height:30vh;
}
`
// const Contain=styled.div`

// `

export default HomeList