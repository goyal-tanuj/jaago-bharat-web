import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./home";
import Main from "./main";
import logo from "./images/homepage/footer.png";
import {
  What_we_do,
  Who_we_are,
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
  Ecobrick,
  Achievements
} from "./components/posts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./blogRouter";
import BlogList from "./BlogList";
import ScrollTop from "./scrollTop";
import Ourstory from "./story";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/Blog/:id"
          element={
            <BlogPage backimg={logo} header="Gallery" description={Gallery} />
          }
        />
        <Route path="/Blog" element={<BlogList backimg={logo} />} />
        <Route
          path="/Gallery"
          element={
            <Main backimg={logo} header="Gallery" description={Gallery} />
          }
        /><Route
        path="/Achievements"
        element={
          <Main backimg={logo} header="Achievements and Recognitions" description={Achievements} />
        }
      />
        <Route
          path="/Publications"
          element={
            <Main
              backimg={logo}
              header="Publications"
              description={Publications}
            />
          }
        />
        <Route
          path="/AnnualReport"
          element={
            <Main
              backimg={logo}
              header="Annual Report"
              description={AnnualReport}
            />
          }
        />
        <Route
          path="/GetInvolved"
          element={
            <Main
              backimg={logo}
              header="Get Involved"
              description={GetInvolved}
            />
          }
        />
        <Route
          path="/Donate"
          element={<Main backimg={logo} header="Donate" description={Donate} />}
        />
        <Route
          path="/Who we are"
          element={
            <Main backimg={logo} header="Who We Are" description={Who_we_are} />
          }
        />
        <Route
          path="/What We Do"
          element={
            <Main backimg={logo} header="An Overview" description={What_we_do} />
          }
        />
        <Route
          path="/Our Story"
          element={<Ourstory />}
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
              header="Our Founder"
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
