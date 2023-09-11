import React from "react";
export default function Main(props) {

  const headerStyle = {
    textAlign: "center",
    height: "fit-content",
    fontSize: "187%",
    backgroundImage: "url(" + props.backimg + ")",
    boxShadow: "inset 13px -18px 0 2000px rgba(0 0 0 / 44%)",
    backgroundSize: "cover",
    color: "orange"
  };

  const contentStyle = {
    background: "white",
    color: "black",
    lineHeight: "1.8rem",
    Height: "37vw",
    fontSize: "1.1rem",
  };
  return (
    <>
      <div className="whole">
        <div className="heading" style={headerStyle}>
          <h1 >{props.header}</h1>
        </div>
        <div className="content" style={contentStyle}>
          {props.description}
        </div>
      </div>
    </>
  );
}
