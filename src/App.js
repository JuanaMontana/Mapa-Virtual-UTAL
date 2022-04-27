
import Menuadmin from "./pages/menuadmin"
import logo from './logo.svg';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './pages/Login.jsx';
import { LoginButton } from './pages/Login';
import { LogoutButton } from './components/logout';
import { Profile } from './components/profile';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">

      <div >
        <div className="rectangulo_login">
        <Login />
        </div>
        <Menuadmin />
      </div>


    </div>
  );
}

export default App;
