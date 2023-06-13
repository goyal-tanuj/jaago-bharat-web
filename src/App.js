import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./home";
import Main from "./main";
import './mains.css' 
import {Link} from 'react-router-dom'
import logo from './images/footer.png'
import {Post2,Posts1,Ourstory,Ourfounders} from "./components/posts";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"  
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Main1" element={<Main backimg={logo} header='Who We Are' description={Posts1}/>} />
        <Route path="/Main6" element={<Main backimg={logo} header='What We Do' description={Post2}/>} />
        <Route path="/Main2" element={<Main backimg={logo} header='Our Story' description={Ourstory}/>} />
        <Route path="/Main4" element={<Main backimg={logo} header='Our Story' description={Ourfounders}/>} />

      </Routes>
      <Footer />
    </Router>
    );
}

export default App;
