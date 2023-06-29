import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./home";
import Main from "./main";
import { Link } from "react-router-dom";
import logo from "./images/footer.png";
import {
  Post2,
  Posts1,
  Ourstory,
  Ourfounder,
  Ourteam,
  Wet_waste_management,
  WaterConservation,
  SMILE,
} from "./components/posts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/Who we are"
          element={
            <Main backimg={logo} header="Who We Are" description={Posts1} />
          }
        />
        <Route
          path="/What We Do"
          element={
            <Main backimg={logo} header="What We Do" description={Post2} />
          }
        />
        <Route
          path="/Our Story"
          element={
            <Main backimg={logo} header="Our Story" description={Ourstory} />
          }
        />
        <Route
          path="/Our Founders"
          element={
            <Main
              backimg={logo}
              header="Our Founders"
              description={Ourfounder}
            />
          }
        />
        <Route
          path="/Our Team"
          element={
            <Main backimg={logo} header="Our Team" description={Ourteam} />
          }
        />
        <Route
          path="/Wet-Waste-Management"
          element={
            <Main
              backimg={logo}
              header="Wet Waste Management"
              description={Wet_waste_management}
            />
          }
        />
        <Route
          path="/Water-conservation"
          element={
            <Main
              backimg={logo}
              header="Water Conservation"
              description={WaterConservation}
            />
          }
        />
        <Route
          path="/SMILE"
          element={
            <Main backimg={logo} header="S.M.I.L.E" description={SMILE} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
