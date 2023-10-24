import { useParams } from "react-router-dom";
import logo from "./images/homepage/footer.png";
import loader from "./components/loader";
import MainRender from "./Blog";
import { useState } from "react";

export default function Main() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [gotData, setGotData] = useState(false);
  // useEffect(() => {
  if (!gotData) {
    loader(id, setData);
    setGotData(true);
  }
  // useEffect(() => {
  // }, [id]);
  return (
    <>
      <MainRender backimg={logo} data={data} />
    </>
  );
}
