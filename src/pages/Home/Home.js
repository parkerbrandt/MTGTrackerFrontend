import './home.css'

import Header from '../../components/Header';
import News from '../../components/News';

const Home = () => {
  return (
    <div className="App">
      <Header />  
      <h1 className="block">Track Your Magic Games!</h1>
      <News />
    </div>
  );
}

export default Home;
