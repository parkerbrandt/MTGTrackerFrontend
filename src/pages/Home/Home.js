import './home.css'

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import News from '../../components/News';


const Home = () => {
  return (
    <div className="App">
      <Header /><br />
      <h1 className="welcome">Track Your Magic Games!</h1><br />
      <News />
      <h3>Featured</h3>
      <h3>Your Updates</h3>
      <h3>Looking for Players</h3><br />
      <Footer />
    </div>
  );
}

export default Home;
