import {React} from 'react'
import {useLocation} from 'react-router-dom'
import './Watch.css'

function Watch() {
    const location=useLocation()
    console.log(location)
    const {id}=location.state
    const {ttitle}=location.state
    const {overview}=location.state
    const {srcimg}=location.state
    const movieid='https://2embed.org/embed/'+id
    console.log(ttitle)
  return (
    <div className='main'>

        <iframe src={movieid}width="100%vw" title={ttitle} height="500px" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
        <div className='watch'>
        <img src={srcimg} alt="not loaded"/>
        <h2>{ttitle}</h2>
        <p>{overview}</p>
        </div>
        
    </div>
  )
}

export default Watch