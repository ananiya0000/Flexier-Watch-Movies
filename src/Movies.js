import {React,useState,useEffect} from 'react'
import Card from './Card'
import './Movies.css'
import { Carousel } from '@trendyol-js/react-carousel'
import axios from 'axios'

function Movies() {

  const [data,setData]=useState(null);
  const [discovermovie,setDiscovermovie]=useState(null);
  //const [discovermovieLoading,setDiscovermovieLoading]=useState(true);
  const [discovertv,setDiscovertv]=useState(null);
  //const [discovertvLoading,setDiscovertvLoading]=useState(true);
  const [loading,setLoading]=useState(true);
  const [top_ratedmovie,setTop_ratedmovie]=useState(null);
  const [upcomingmovie,setUpcomingmovie]=useState(null);
  const [newestmovie,setNewestmovie]=useState(null)
  //const [topratedmovieloading,settopRatedmovieloading]=useState(true);
  const [error,setError]=useState(null);

  useEffect(()=>{
    const getData=async()=>{
      try{
        const trending= await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
        const discovermovie=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        const discovertv=await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
        const top_ratedmovie=await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        const upcomingmovie=await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        const newestmovie=await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        setData(trending.data)
        setDiscovermovie(discovermovie.data)
        setDiscovertv(discovertv.data)
        setTop_ratedmovie(top_ratedmovie.data)
        setUpcomingmovie(upcomingmovie.data)
        setNewestmovie(newestmovie.data)
        setError(null)
        setLoading(false)
        // setDiscovermovieLoading(false)
        // setDiscovertvLoading(false)
        // settopRatedmovieloading(false)
      }catch{
        console.log('error ananiya')
      }
      finally{
        setLoading(false)
      }
    }
  getData()
  },[]);
  while(loading){
    return (<div className='colorclass'>Loading...</div>)
  }
  return (
    <div className='movies'>
        <div>
            <h1>Trending</h1>
          {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <Carousel show={5.5} slide={5} transition={0.8}className={'carousel'}>
        {data && data.results && data.results.map(element=>(
          <Card key={element.id} keys={element.id} mtitle={element.title} description={element.overview} brand={element.poster_path}/>
        )
        )}
      </Carousel>
        </div>
        <h1>Movies</h1>
        <div>
          <h5>Now Playing</h5>
          {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <Carousel show={5.5} slide={5} transition={0.8}className={'carousel'}>
        {newestmovie && newestmovie.results && newestmovie.results.map(element=>(
          <Card key={element.id} keys={element.id} mtitle={element.title} description={element.overview} brand={element.poster_path}/>
        ))}
      </Carousel>
        </div>
        <div>
          <h5>Upcoming</h5>
          {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <Carousel show={5.5} slide={5} transition={0.8}className={'carousel'}>
        {upcomingmovie && upcomingmovie.results && upcomingmovie.results.map(element=>(
          <Card key={element.id} keys={element.id} mtitle={element.title} description={element.overview} brand={element.poster_path}/>
        ))}
      </Carousel>
        </div>
        <div>
          <h5>Top Rated</h5>
          {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <Carousel show={5.5} slide={5} transition={0.8}className={'carousel'}>
        {top_ratedmovie && top_ratedmovie.results && top_ratedmovie.results.map(element=>(
          <Card key={element.id} keys={element.id} mtitle={element.title} description={element.overview} brand={element.poster_path}/>
        ))}
      </Carousel>
        </div>
        <div>
        <h5>Discover</h5>
          {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <Carousel show={5.5} slide={5} transition={0.8}className={'carousel'}>
        {discovermovie && discovermovie.results && discovermovie.results.map(element=>(
          <Card key={element.id} keys={element.id} mtitle={element.title} description={element.overview} brand={element.poster_path}/>
        ))}
      </Carousel><br/><br/><br/>
      <h1>Tv</h1>
      <h5>Discover</h5>
          {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <Carousel show={5.5} slide={5} transition={0.8}className={'carousel'}>
        {discovertv && discovertv.results && discovertv.results.map(element=>(
          <Card key={element.id} keys={element.id} mtitle={element.title} description={element.overview} brand={element.poster_path}/>
        ))}
      </Carousel>
      </div>
    </div>
  )
}

export default Movies