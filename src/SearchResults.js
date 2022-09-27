import {React,useState,useEffect} from 'react'
import axios from 'axios'
import { Carousel } from '@trendyol-js/react-carousel'
import Card from './Card'
import {useLocation} from 'react-router-dom'

function SearchResults() {
  const location=useLocation()
  const {keywords}=location.state
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(null);
  useEffect(()=>{
    const getData=async()=>{
      try{
        const trending= await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${keywords}&page=1&include_adult=flase`)
        setData(trending.data)
        setError(null)
        setLoading(false)
      }catch{
        console.log('error ananiya')
      }
      finally{
        setLoading(false)
      }
    }
  getData()
  },[keywords]);
  while(loading){
    return (<div className='colorclass'>Loading...</div>)
  }
  return (
    <div>
      <h1 style={{color:'white'}}>Search Result: {keywords}</h1>
          {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <Carousel show={5.5} slide={5} transition={0.5}className={'carousel'}>
        {data && data.results && data.results.map(element=>(
          <Card key={element.id} keys={element.id} mtitle={element.title} description={element.overview} brand={element.poster_path}/>
        ))}
      </Carousel>
    </div>
  )
}

export default SearchResults