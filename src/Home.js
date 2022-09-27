import './Home.css';
import Header from './Header'
import SearchBanner from './SearchBanner'
import Movies from './Movies'
import Footer from './Footer'

function Home() {
  return (
    <div className="home">
      {/* Header */}
      <Header/>
      {/* Banner which only contains search box */}
      <SearchBanner/>
      {/* Movies  */}
      {/* Cards */}
      <Movies/>
      {/* Tv shows */}
      {/* Cards */}
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default Home;