import styled from 'styled-components'
import icon from '../assets/music_icon.png'
import Tracklist from '../components/Tracklist'


function HomeList(){
    return(
        <Mainlist>
            <h1 className='change'>TOP 10 MUSIC TRACKS IN THE US</h1>

            <div className="contain">
            
                <Cards className='cards'>
                <img className='cards-img' src={icon} alt="card icon" srcSet=""/>
                    <div className='right'>
                    <h4 className='title'>TOP 10 MUSIC TRACKS IN THE US</h4>
                    <p className='artist'>By: </p>
                    <Tracklist />
                    </div>
                </Cards>
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
`
const Cards = styled.div`

    background-color:#00f;
    padding:3% 1%;
    height:30vh;
    width:50%

.cards-img{
    width: 20%;
    height:auto;
}
.right{
    border:1px solid #fff;
    float:right;
}
.title{
    font-size:1.5rem;
}
`
// const Contain=styled.div`

// `

export default HomeList