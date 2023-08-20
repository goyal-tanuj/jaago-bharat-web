import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./home";
import Main from "./main";
import logo from "./images/homepage/footer.png";
import {
 What_we_do,
   Who_we_are,
  Ourstory,
  Ourfounder,
  Ourteam,
  Wet_waste_management,
  WaterConservation,
  SMILE,
  Overview,
  Partners,
  Gallery,
  Publications,
  AnnualReport,
  GetInvolved,
  Donate,
  Ecobrick
} from "./components/posts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/Gallery"
          element={
            <Main backimg={logo} header="Gallery" description={Gallery} />
          }
        />
        <Route
          path="/Publications"
          element={
            <Main backimg={logo} header="Publications" description={Publications} />
          }
        />
        <Route
          path="/AnnualReport"
          element={
            <Main backimg={logo} header="Annual Report" description={AnnualReport} />
          }
        />
        <Route
          path="/GetInvolved"
          element={
            <Main backimg={logo} header="Get Involved" description={GetInvolved} />
          }
        />
        <Route
          path="/Donate"
          element={
            <Main backimg={logo} header="Donate" description={Donate} />
          }
        />
        <Route
          path="/Who we are"
          element={
            <Main backimg={logo} header="Who We Are" description={ Who_we_are} />
          }
        />
        <Route
          path="/What We Do"
          element={
            <Main backimg={logo} header="What We Do" description={What_we_do} />
          }
        />
        <Route
          path="/Our Story"
          element={
            <Main backimg={logo} header="Our Story" description={Ourstory} />
          }
        />
        <Route
          path="/An overview"
          element={
            <Main backimg={logo} header="An Overview" description={Overview} />
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
          path="/Partners"
          element={
            <Main backimg={logo} header="Partners" description={Partners} />
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
        <Route
          path="/Eco brick"
          element={
            <Main backimg={logo} header="Eco-Brick" description={Ecobrick} />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
