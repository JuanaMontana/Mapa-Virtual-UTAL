import logo from './logo.svg';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login.jsx';
import { LoginButton } from './Login';
import { LogoutButton } from './Logout';
import { Profile } from './Profile';

function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
          
      </header>
      <div className="rectangulo_login">
        <Login/>
      </div>
      
    </div>
  );
}

export default App;