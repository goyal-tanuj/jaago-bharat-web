import React from "react";
import ReactMarkdown from "react-markdown";
import { listData } from "./components/loader";
import "./Blog.css";
import { Link } from "react-router-dom";

export default function Main(props) {
  const list = listData(6);
  const headerStyle = {
    backgroundImage: "url(" + props.backimg + ")",
  };

  return (
    <>
      <div className="whole">
        <div className="heading" style={headerStyle}></div>
        <div className="content contents">
          <div className="head-box">
            <h1 className="head">Blogs</h1>
          </div>
          <div className="blogitems">{list.map((x) => BlogItem(x))}</div>
        </div>
      </div>
    </>
  );
}

function BlogItem(data) {
  data.descp = data.plain.slice(0, 500);
  return (
    <div className="blogitem">
      <Link to={data.link} className="item-link"><h1 className="item-title">{data.title}</h1></Link>
      <div className="subhead">
        <span className="item-author">{data.author}</span>
        <span className="item-date">{data.date}</span>
      </div>
      <p className="item-desc"><ReactMarkdown children={data.descp}/>...</p>
    </div>
  );
}
