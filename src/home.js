import React from 'react'
import Carousel from './components/carousel';
import Bloglist from './components/blogs'
import one from './images/one.png';
import two from './images/two.png';
import three from './images/three.png';

const Descr = function (props)
{
  return (
    <div className="box">
      <div className="ani">
        <div className="anilayer"></div><img src={props.image} alt="" />
        <h3>{props.desc}</h3></div>
      <p>{props.content}</p>
    </div>
  );
}

export default function Home()
{
  return (

    <>
      <Carousel />
      <section className="two">
        <div className="above">
          <h1>" Responsible Citizens, Developed Nations "</h1>
          <p>Jaago bharat is a non profit organization working from 2014 across the Noida and NCR region.
            We mainly focused on solving environmental issue and social welfare concerns such as wet
            waste management, plastic waste and water conservation.</p>
        </div>
        <div className="below">
          <Descr image={one} desc="Responsive" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
             tempor incididunt ut labore et dolore magna aliqua."/>
          <Descr image={two} desc="Quality" content="Lorem ipsum dolo
            r sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
          <Descr image={three} desc="Support" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
        </div>

      </section>
      <section className="three">
        <div className="footerimage">
          <h1>"Responsible citizens,developed nations"
          </h1>
        </div>
        <div className="blogs">
          <h2>Blog</h2>
          <div className="blogslist">
            <Bloglist colors='purple' category="Uncategorised" dateevent="2nd October 2019 | Event 3" content="After searching nearly for one year, finally we got a perfect location for donating different books that you all people 
          donated i.e at Lal Bahadur Shastri library ,Sadullapur, Greater Noida. The village has students of"/>
            <Bloglist colors='blue' category="Uncategorised" dateevent="2nd October 2019 | Event 3" content="After searching nearly for one year, finally we got a perfect location for donating different books that you all people 
          donated i.e at Lal Bahadur Shastri library ,Sadullapur, Greater Noida. The village has students of"/>
            <Bloglist colors='red' category="Uncategorised" dateevent="2nd October 2019 | Event 3" content="After searching nearly for one year, finally we got a perfect location for donating different books that you all people 
          donated i.e at Lal Bahadur Shastri library ,Sadullapur, Greater Noida. The village has students of"/>
          </div>
        </div>
      </section>
      <section className='four'>
        <div className="touch">
          <h1>Get in touch</h1>
          <ul>
            <li>Mr. Parth Gautam- 7678697168 (Team Leader)</li>

            <li>Mr. Chirag Batra - 9899668723 (Team Leader)</li>
            <td></td>
            <li>Ms. Amisha Mehta- 9167855663 (HR member)</li>
          </ul>
        </div>
      </section >
    </>
  )
}
