import logo from "./logo.svg";
import "./App.css";
import Desktoproot from "./components/Desktoproot";
import Tabletroot from "./components/Tabletroot";
import Mobileroot from "./components/Mobileroot";
import { useMediaQuery } from "react-responsive";
function App() {
  const isDesktop = useMediaQuery({ minWidth: 870, maxWidth: 1800 });
  const isTablet = useMediaQuery({ minWidth: 530, maxWidth: 860 });
  const isMobile=useMediaQuery({ minWidth: 100, maxWidth: 500 });
  return (
    <div className="App">
      {isDesktop && <Desktoproot />}
      {isTablet && <Tabletroot />}
      {isMobile && <Mobileroot/>}
    </div>
  );
}

export default App;
