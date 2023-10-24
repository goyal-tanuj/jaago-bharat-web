import { useParams } from "react-router-dom";
import logo from "./images/homepage/footer.png";
import loader from "./components/loader";
import MainRender from "./Blog";
import { useEffect, useState } from "react";

export default function Main() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  // useEffect(() => {
  loader(id, setData);
  // }, [id]);
  return (
    <>
      <MainRender backimg={logo} data={data} />
    </>
  );
}
