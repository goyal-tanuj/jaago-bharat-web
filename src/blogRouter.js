import { useParams } from "react-router-dom"
import logo from "./images/homepage/footer.png";
import loader from "./components/loader";
import MainRender from "./Blog";


export default function Main() {
    let { id } = useParams();
    const data = loader(id);
    return (
      <>
        <MainRender backimg={logo} data={data} />
      </>
    );
  }