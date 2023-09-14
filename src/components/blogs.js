import React from 'react'
import  './App.css'
import {Link} from 'react-router-dom'
const Bloglist=function(props){
  return(
    <div className="blogbox">
      <div className="category" style={{color:props.colors}} >{props.category}</div>
      <div className="dateofevent"><h3>{props.dateevent}</h3></div>
      <p>{props.content}<br/><Link to={props.link} style={{color:'purple'}}>Read more...</Link></p>
    </div>
  );
}
export default Bloglist ;