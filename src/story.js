import { useState, useEffect } from "react";
import {Carousel1} from "./components/carousel";
import { homeList } from "./components/loader";
import styled from "styled-components";

const img2="https://firebasestorage.googleapis.com/v0/b/jaagobharatwebdev.appspot.com/o/images%2Fstory%2F2.jpg?alt=media";
const img3="https://firebasestorage.googleapis.com/v0/b/jaagobharatwebdev.appspot.com/o/images%2Fstory%2F3.jpg?alt=media";
  const img =
 "https://firebasestorage.googleapis.com/v0/b/jaagobharatwebdev.appspot.com/o/images%2Fstory%2F1.jpg?alt=media";

 const Givspace = styled.div`
  min-height:5rem;
  @media (min-width: 998px) {
    min-height:3rem;
    }
  }
`;
 const Descr = function (props) {
  return (
    <div className="box">
      <div className="ani">
        <div className="anilayer"></div>
        <img src={props.image} alt="" />
        <h3>{props.desc}</h3>
      </div>
      <p>{props.content}</p>
    </div>
  );
};

export default function Home() {

  return (
    <>
    <Givspace></Givspace>
      <Carousel1 bimg1={img3} bimg={img} bimg2={img2}/>
      <section className="two">
      <div>
      <p>
        By 2014 <span> Mr. Prashasti Tripathi </span> Was persuaded that
        many important global development initiatives weren’t receiving the
        attention they deserved. Believing in importance of activism and
        responsibility among the citizens so that instead of complaining, people
        begin to perform their basic civic fundamental duties decided to
        establish an NGO to make a contribution to society. His main goal was to
        promote education and water conservation.
      </p>
    </div>
    <div>
      <br />
      <p>
        A young leadership then approached in 2018, with an extended vision of
        re-imagine relationship with the earth, with each other and with urban
        spaces. Jaago Bharat is keen to deliver its services to larger audience
        across the region with right set of collaboration and partnerships from
        both for profit sector and social enterprises like SAFE.
      </p>
      <br />
      <p>
        Jaago bharat integrates with other NGOs and government schemes to
        diminish the widening gap between informal sector and mainstream
        society.
      </p>
    </div>
      </section>
    </>
  );
}
