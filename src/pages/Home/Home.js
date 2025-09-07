import './home.css'

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import News from '../../components/News';

import { loginRq } from '../../utils/requests';
import { useEffect, useState } from "react";


const Home = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(true);
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

      // Check if user is logging in or registering
      if (isLoggingIn) {
        // TODO: Send username/password to server, and retrieve isValid or not
        let response = loginRq("login", username, password);
      } else {
        // Register the user with the server
        let response = loginRq("register", username, password);
      }

      setIsLoggedIn(true);
    }

    return (
      <div>
        <h1>LOG IN or REGISTER</h1>
        <form onSubmit={handleLogin}>
          <label>Username: </label>
          <input type="text" name="username"></input><br />
          <label>Password: </label>
          <input type="text" name="password"></input><br />
          <button type="submit" onClick={setIsLoggingIn(true)}>Log In</button>
          <button type="submit" onClick={setIsLoggingIn(false)}>Register</button>
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
