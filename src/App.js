import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro"
import './App.css'
import {themeContext} from './Context'
import { useContext } from 'react'

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App" style={{background : darkMode? 'black' : '', color : darkMode? 'white' : ''}}>
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
