import { useState, useEffect } from "react";
import Carousel from "./components/carousel";
import Bloglist from "./components/blogs";
import { homeList } from "./components/loader";
import Count from "./components/counter";
import styled from "styled-components";

const one =
  "https://firebasestorage.googleapis.com/v0/b/jaagobharatwebdev.appspot.com/o/images%2Fhomepage%2Fglobe.png?alt=media";
const two =
  "https://firebasestorage.googleapis.com/v0/b/jaagobharatwebdev.appspot.com/o/images%2Fhomepage%2Fmic.png?alt=media";
const three =
  "https://firebasestorage.googleapis.com/v0/b/jaagobharatwebdev.appspot.com/o/images%2Fhomepage%2Ftailor.png?alt=media";
const img2="https://firebasestorage.googleapis.com/v0/b/jaagobharatwebdev.appspot.com/o/images%2Fhomepage%2FWhatsApp%20Image%202023-12-30%20at%2010.19.06%20PM.jpeg?alt=media&token=4b915220-1f3a-4cad-9d04-33228efcaf44";
const img3="https://firebasestorage.googleapis.com/v0/b/jaagobharatwebdev.appspot.com/o/images%2Fhomepage%2FWhatsApp%20Image%202023-12-30%20at%2010.39.18%20PM%20(1).jpeg?alt=media&token=4850256c-b061-498e-a4d4-a75b45bbad19";  const cropped =
  "https://firebasestorage.googleapis.com/v0/b/jaagobharatwebdev.appspot.com/o/images%2Fhomepage%2FWhatsApp%20Image%202023-12-30%20at%2010.39.18%20PM.jpeg?alt=media&token=6421ffd0-d962-4274-bccf-955f3ae955da";
  const img =
 "https://firebasestorage.googleapis.com/v0/b/jaagobharatwebdev.appspot.com/o/images%2Fhomepage%2FWhatsApp%20Image%202023-12-30%20at%2010.39.18%20PM%20(2).jpeg?alt=media&token=8ccabac6-94c7-401b-bd59-5bbdd5d338fa";
 const footer ="https://firebasestorage.googleapis.com/v0/b/jaagobharatwebdev.appspot.com/o/images%2Fhomepage%2FWhatsApp%20Image%202023-12-30%20at%2010.39.18%20PM%20(3).jpeg?alt=media&token=cc96e812-5cde-4141-92f9-8315dedb47a9";

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
  const [list, setList] = useState([]);
  useEffect(() => {
    homeList(3, setList);
  }, []);

  const colors = ["purple", "red", "blue"];
  return (
    <>
    <Givspace></Givspace>
      <Carousel bimg1={img3} bimg={img} bimg2={cropped} bimg3={img2} bimg4={footer}/>
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
