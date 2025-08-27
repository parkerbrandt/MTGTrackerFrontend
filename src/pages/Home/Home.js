import './home.css'

import Header from '../../components/Header';
import News from '../../components/News';

function Home() {
  return (
    <div className="App">
      <Header />
      <h1>Track Your Magic Games!</h1>
      <News />
    </div>
  );
}

export default Home;
