import logo from './logo.svg';
import './App.css';
import Topnav from './components/topNavComponents/Topnav';
import Desktoproot from './components/Desktoproot';
import Mobileroot from './components/Mobileroot';
import { useMediaQuery } from 'react-responsive'

function App() {
  const isDesktop = useMediaQuery({minWidth:870 , maxWidth: 1800 })
  return (
    <div className="App">
    {isDesktop?<Desktoproot/>:<Mobileroot/>}
    
    </div>
  );
}

export default App;
