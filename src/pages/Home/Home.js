import './home.css'

import Header from '../../components/Header';
import News from '../../components/News';

const Home = () => {
  return (
    <div className="App">
      <Header /><br />
      <h1 className="welcome">Track Your Magic Games!</h1><br />
      <News />
    </div>
  );
}

export default Home;
