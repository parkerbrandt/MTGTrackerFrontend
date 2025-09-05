import './home.css'

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import News from '../../components/News';

import { useEffect, useState } from "react";


const Home = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  /*
  * Child Components
  */
  const HomePage = () => {
    
    return (
          <div>
            <Header /><br />
            <h1 className="welcome">Track Your Magic Games!</h1><br />
            <News />
            <h3>Featured</h3>
            <h3>Your Updates</h3>
            <h3>Looking for Players</h3><br />
            <Footer />
          </div>
    )
  }


  const LoginPage = () => {

    const handleLogin = () => {
      setIsLoggedIn(true);
    }

    return (
      <div>
        <h1>LOG IN or REGISTER</h1>
        <form onSubmit={handleLogin}>
          <label>Username: </label>
          <input type="text"></input><br />
          <label>Password: </label>
          <input type="text"></input><br />
          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }


  return (
    <div className="App">
      {
        isLoggedIn ? ( 
          <>
            <HomePage />
          </>
        ) : (
          <>
            <LoginPage />
          </>
        )
      }
    </div>
  );
}

export default Home;
