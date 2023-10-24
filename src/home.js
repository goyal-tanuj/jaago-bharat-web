import { useState, useEffect } from "react";
import Carousel from "./components/carousel";
import Bloglist from "./components/blogs";
import { homeList } from "./components/loader";
import Count from "./components/counter";

const one =
  "https://firebasestorage.googleapis.com/v0/b/jaagobharatwebdev.appspot.com/o/images%2Fhomepage%2Fglobe.png?alt=media";
const two =
  "https://firebasestorage.googleapis.com/v0/b/jaagobharatwebdev.appspot.com/o/images%2Fhomepage%2Fmic.png?alt=media";
const three =
  "https://firebasestorage.googleapis.com/v0/b/jaagobharatwebdev.appspot.com/o/images%2Fhomepage%2Ftailor.png?alt=media";
const cropped =
  "https://firebasestorage.googleapis.com/v0/b/jaagobharatwebdev.appspot.com/o/images%2Fhomepage%2Fcropped.jpg?alt=media";
const img =
  "https://firebasestorage.googleapis.com/v0/b/jaagobharatwebdev.appspot.com/o/images%2Fhomepage%2Fimg.png?alt=media";
const footer =
  "https://firebasestorage.googleapis.com/v0/b/jaagobharatwebdev.appspot.com/o/images%2Fhomepage%2Ffooter.png?alt=media";

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
  const [list, setList] = useState([]);

  // useEffect(() => {
  homeList(3, setList);
  // }, []);

  const colors = ["purple", "red", "blue"];
  return (
    <>
      <Carousel bimg1={cropped} bimg={img} bimg2={footer} />
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
            {list.map((x, i) => (
              <Bloglist
                colors={colors[i]}
                category={x.tags[0]}
                dateevent={x.title}
                content={x.plain.slice(0, 200)}
                link={x.link}
              />
            ))}
          </div>
        </div>
        <div className="counter-area">
          <Count title="Waste Workers Empowered" limit={1542} time={5} />
          <Count title="People Engaged" limit={4452} time={5} />
          <Count title="Carbon Reduced (kgs)" limit={8745} time={5} />
        </div>
        <div className="social-embed">
          <div className="embed">
            <div
              class="fb-page"
              data-href="https://www.facebook.com/JaagoBharatTrust"
              data-tabs="timeline"
              data-width="5000"
              data-height=""
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/JaagoBharatTrust"
                class="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/JaagoBharatTrust">
                  Jaago Bharat Trust
                </a>
              </blockquote>
            </div>
          </div>
          <div className="embed">
            <a
              class="twitter-timeline"
              href="https://twitter.com/J_B_trust?ref_src=twsrc%5Etfw"
            >
              Tweets by J_B_trust
            </a>{" "}
          </div>
        </div>
      </section>
    </>
  );
}
