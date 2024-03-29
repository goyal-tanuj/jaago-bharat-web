import React from "react";
import ReactMarkdown from 'react-markdown'
import {CopyToClipboard} from "react-copy-to-clipboard";
import "./Blog.css";
import remarkGfm from 'remark-gfm'

export default function Main(props) {
  const headerStyle = {
    backgroundImage: "url(" + props.backimg + ")",
  };
  
  const data = props.data;
  if(!data.tags) data.tags = [];
  const content = data.desc //.split('\n').map(x => <p className="para">{x}</p>);

  return (
    <>
      <div className="whole">
        <div className="heading" style={headerStyle}></div>
        <div className="content">
          <div className="head-box">
            <h1 className="head">{data.title}</h1>
          </div>
          <div className="date-box">
            <span className="date">{data.date}</span>
            <span className="author">By {data.author}</span>
          </div>
          <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
          <div className="tags-holder">
            <div>Tags: {data.tags.map((x, i) => <span className="tag">{i !== data.tags.length - 1 ? x + ', ': x + ' ' }</span>)}</div>
            <div className="icons">
              <span>Share this article:</span>
              <a href="https://www.facebook.com"><img alt="facebook" src="/facebook.png" className="shareicon"/></a>
              <a href="https://www.instagram.com"><img alt="instagram" src="/instagram.png" className="shareicon"/></a>
              <CopyToClipboard text={data.title + ": " + window.location.href}>
                <div className="copy">
                  <button></button>
                  <img alt="copy" src="/link.png" className="shareicon"/>
                </div>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
