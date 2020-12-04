import styled from 'styled-components'

function HomeList(){
    return(
        <Mainlist>
            <div className="cards">
                <h1 className='change'>TOP 10 MUSIC TRACKS IN THE US</h1>
            </div>

        </Mainlist>
    )
}

const Mainlist= styled.div`
    background-color:red;
    height:50vh;
    margin-top:5%;

.cards{
    background-color:green;
    width:50%;
    margin:10% 5%;
    height:20vh;
}
`

export default HomeList