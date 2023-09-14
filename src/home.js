import React from "react";
import Carousel from "./components/carousel";
import Bloglist from "./components/blogs";
import one from "./images/homepage/globe.png";
import two from "./images/homepage/mic.png";
import three from "./images/homepage/tailor.png";
import cropped from "./images/homepage/cropped.jpg";
import img from "./images/homepage/img.png";
import footer from "./images/homepage/footer.png";
import {listData} from "./components/loader";


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
  const list = listData(3);
  const colors = ["purple", "red", "blue"]
  return (
    <>
      <Carousel bimg1={cropped} bimg={img} bimg2={footer}/>
      <section className="two">
        <div className="above">
          <h1>" Responsible Citizens, Developed Nations "</h1>
          <p>
            Jaago bharat is a non profit organization working from 2014 across
            the Noida and NCR region. We mainly focused on solving environmental
            issue and social welfare concerns such as wet waste management,
            plastic waste and water conservation.
          </p>
        </div>
        <div className="below">
          <Descr
            image={one}
            desc="Environmental Protection"
            content="Preserving our planet through collective environmental guardianship."
          />
          <Descr
            image={two}
            desc="Awareness"
            content="Igniting awareness for a brighter tomorrow"
          />
          <Descr
            image={three}
            desc="Skill Development"
            content="Nurturing skills for personal and global growth."
          />
        </div>
      </section>
      <section className="three">
        <div className="footerimage">
          <h1>"Responsible citizens,developed nations"</h1>
        </div>
        <div className="blogs">
          <h2>Blog</h2>
          <div className="blogslist">
            {list.map((x, i) => <Bloglist colors={colors[i]} category={x.tags[0]} dateevent={x.title} content={x.plain.slice(0, 200)} link={x.link}/>)}
          </div>
        </div>
      </section>
    </>
  );
}
