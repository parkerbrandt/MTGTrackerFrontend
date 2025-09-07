import './home.css'

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import News from '../../components/News';

import { loginRq } from '../../utils/requests';
import { useEffect, useState } from "react";


const Home = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
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

      try {
        let loginAction = isLoggingIn ? "login" : "register";
        loginRq(loginAction, username, password)
          .then((response) => {
            if (!response.ok) {
                throw new Error("Network Response Error: ", response.status);
            }

            setIsLoggedIn(true);
          })
          .catch((error) => {
              console.error("Login Error: ", error);
          });

      } catch (err) {
        console.error("Could not authorize user: ", err);
      }
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
