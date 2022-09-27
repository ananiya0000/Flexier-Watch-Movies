import './SearchBanner.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'

function SearchBanner() {
  const [message, setMessage] = useState('a');
  const handleChange = event => {
    if(event.target.value!==""){
      setMessage(event.target.value);
    }else{
      setMessage('a')
    }

    console.log('value is:', event.target.value);
  }

  return (
    <div className='searchbanner'>
        <form action='' className='searchbox'>
            <input type="text" id="fname" name="firstname" placeholder="Search" onChange={handleChange}/>
            <Link to={'/search'} state={{keywords:message}}><input type="submit" value="Search"/></Link>
        </form>
    </div>
  )
}

export default SearchBanner