
import classes from "./App.module.css"
import Home from "./Components/Home/Home";
import Navbar from "./Components/Nav-bar/Navbar";
import  About from "./Components/About/About";
import Resume from "./Components/Resume/Resume"
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

const App = () => {

  return (
  <div className={classes['whole-content']}>
    <div className={classes['nav-bar']}>
      <Navbar />
      <Home  />
      <About /> 
      <Resume />
      <Portfolio />
      <Contact /> 
    </div>
    <div className={classes.content}>
    </div>
  </div>
);
}

export default App;
