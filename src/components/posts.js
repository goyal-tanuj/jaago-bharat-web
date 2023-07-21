import founder from "../images/trustee-photo-2.jpg";
import ecobrick1 from "../images/ecobrick-0001-768x1087.png";
import ecobrick2 from "../images/ecobrick-0002-768x1087.png";
import ecobrick3 from "../images/ecobrick-0000-1-724x1024.png";
import ecobrick5 from "../images/pasted image 0.png";
import ecobrick6 from "../images/pasted image 0 (1).png";
import ecobrick7 from "../images/pasted image 0 (2).png";
import ecobrick8 from "../images/ecobrick-0007-1024x744.png";
import ecobrick9 from "../images/image1.png";
import ecobrick10 from "../images/image4.png";
import ecobrick11 from "../images/image3.png";
import ecobrick12 from "../images/image2.png";
import wet_waste_1 from "../images/wet_waste_1.jpg";
import wet_waste_3 from "../images/wet_waste_3.png";
import wet_waste_4 from "../images/wet_waste_4.png";
import wet_waste_5 from "../images/wet_waste_5.png";
import wet_waste_6 from "../images/wet_waste_6.png";
import Water_conservation_1 from "../images/Water_conservation_1.jpg";
import Smile from "../images/SMILE.jpg";
import styled from "styled-components";
import "../../src/components/App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Who_we_are = (
  <div style={{ textAlign: "left" }}>
    <p>
      Jaago Bharat Trust , is a non-profit organization working from 2014 across
      the Noida NCR region.
      <br />
      <h4>
        <u>AIM –</u>
      </h4>{" "}
      Jaago Bharat primarily aims to bring the deplorable condition of Our
      Environment, Water bodies, Waste management and Education, in the
      forefront.
      <br />
      <br />
      We are an operational NGO, meaning we plan and carry out
      boots-on-the-ground projects to accomplish our objectives. This requires a
      great deal of careful planning, communication, and local involvement for
      each project.
    </p>
    ;
  </div>
);
const What_we_do = (
  <div style={{ textAlign: "left" }}>
    Our main objectives include:
    <br />
    <br />
    <ul style={{ marginLeft: "3rem" }}>
      <li>Sustainable Development</li>
      <li>Skill Development</li>
      <li>Social Awareness</li>
      <li>Environment</li>
    </ul>
    <br />
    We are working towards many environmental issues like Wet Waste Management,
    Rainwater Harvesting, Plastic Waste Ecobrick, Old Clothes Revamping.
    <br />
    Our work related to waste management has been published in many newspapers &
    magazines and we also have won 2nd prize for our Wet Waste Composter on
    Divisional Innovation Exhibition, organized by Regional Science & Technology
    Centre, Ghaziabad.
    <br />
  </div>
);
const Ourstory = (
  <div style={{ textAlign: "left" }}>
    By 2014 Mr. Prashasti Tripathi Was persuaded that many important global
    development initiatives weren’t receiving the attention they deserved.
    Believing in importance of activism and responsibility among the citizens so
    that instead of complaining, people begin to perform their basic civic
    fundamental duties
    <br /> decided to establish an NGO to make a contribution to society. His
    main goal was to promote education and water conservation. <br />A young
    leadership than approached in 2018, with an extended vision of re-imagine
    relationship with the earth, with each other and with urban spaces. Jaago
    Bharat is keen to deliver its services to larger audience across the region
    with right set of collaboration and partnerships from both for profit sector
    and social enterprises like SAFE. <br />
    Jaago bharat integrates with other NGOs and government schemes to diminish
    the widening gap between informal sector and mainstream society.
  </div>
);

const Overview = (
  <div style={{ textAlign: "center" }}>
    <h1>This will be updated shortly!</h1>
  </div>
);

const Partners = (
  <div style={{ textAlign: "left" }}>
    <h2>Jaago Bharat Partners</h2>
    <br />
    <ol>
      <li>
        <h3>GRADS International School</h3>
        <p>
          Mrs Aditi Basu Roy, the principal of GRADS International School is one
          of the most prominent partner of Jaago Bharat Team. We have conducted
          many awareness drive and training session with them.
        </p>
        <div style={{ textAlign: "center" }}>
          <img
            alt=""
            src="/partners/image3.png"
            style={{ width: "85%", margin: "auto", borderRadius: "10px" }}
          ></img>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <img
            alt=""
            src="/partners/image5.png"
            style={{ width: "85%", margin: "auto", borderRadius: "10px" }}
          ></img>
        </div>
      </li>
      <br />
      <li>
        <h3>Social Action for forest & Environment (SAFE)</h3>
        <p>
          Mr Vikrant Tongad, founder of SAFE is one of the most remarkable
          Envirionmentalist across Delhi NCR. Team Jaago Bharat has collaborated
          with them on many aspects regarding sharing our volunteer, conducting
          different awareness drive and much more.
        </p>
        <div style={{ textAlign: "center" }}>
          <img
            alt=""
            src="/partners/image4.png"
            style={{ width: "85%", margin: "auto", borderRadius: "10px" }}
          ></img>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <img
            alt=""
            src="/partners/image7.png"
            style={{ width: "85%", margin: "auto", borderRadius: "10px" }}
          ></img>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <img
            alt=""
            src="/partners/image6.png"
            style={{ width: "85%", margin: "auto", borderRadius: "10px" }}
          ></img>
        </div>
      </li>
      <br />
      <li>
        <h3>Sumangla Kapoor</h3>
        <p>
          Her approach and efforts towards social work is commendable. She has
          been an incredible part of the team.
        </p>
        <br />
        <div style={{ textAlign: "center" }}>
          <img
            alt=""
            src="/partners/image2.png"
            style={{ width: "85%", margin: "auto", borderRadius: "10px" }}
          ></img>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <img
            alt=""
            src="/partners/image1.png"
            style={{ width: "85%", margin: "auto", borderRadius: "10px" }}
          ></img>
        </div>
      </li>
    </ol>
  </div>
);

const makeCarousel = (arr) => {
  arr = arr.map((x) => {
    return (
      <div>
        <img alt="" src={x} />
      </div>
    );
  });
  return (
    <div style={{ textAlign: "center" }}>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        transitionTime={750}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        {arr}
      </Carousel>
    </div>
  );
};

const Gallery = (
  <div style={{ textAlign: "left" }}>
    <div>
      <h3>Events held in 2014</h3>
      <br />
      <p>
        Our very first initiative is to save nature. In September 2014, Jaago
        Bharat Team floated information in public through talking with them,
        self-driving cycle for 66 km and distributing pamphlets.
      </p>
      <br />
      {makeCarousel(["/gallery/2014/image102.jpg"])}
      <br />
    </div>
    <div>
      <h3>Events held in 2016</h3>
      <br />
      <p>
        To make the new year happy and healthy our JAAGO BHARAT team distributed
        clothes to poor people in NOIDA, PATNA & KOTA. Team started to put their
        effort from December 2015 to collect clean & usable warm clothes for
        distribution. “Giving a warm smile on people’s face, that is our way to
        welcome New Year.”
      </p>
      <br />
      {makeCarousel(["/gallery/2016/image25.jpg"])}
      <br />
      <p>
        Team Jaago Bharat celebrated the 67th Republic Day, with the
        underprivileged children in cities Noida and Kota simultaneously. We
        distributed biscuits & chocolates among the underprivileged slum
        children of Sector 63, Noida and orphanage children of sector 12, Noida.
        Our team members also distributed chocolates in Kota too. We felt glad
        by giving smile on their faces.
      </p>
      <br />
      {makeCarousel(["/gallery/2016/image80.jpg", "/gallery/2016/image30.jpg"])}
      <br />
      <p>
        Team Jaago Bharat participated in the tree plantation drive in village
        Khaipur near Noida extension. It was a great experience for all of us.
        Also interacted with the students of Rainbow public school and planted
        trees in the school premises. All the students participated in the
        plantation with enthusiasm. We told them about the importance of
        planting trees and preserving them and had a great time with the kids.
      </p>
      <br />
      {makeCarousel(["/gallery/2016/image84.jpg"])}
      <br />
      <p>
        Under our "A Warm smile" campaign, on 26th January, our team members
        visited an orphanage in sector 12, Noida and spent several hours,
        dancing, singing with the kids. They taught kids about the history and
        relevance of Republic Day. They also told them the importance of
        cleanliness and hygiene in life. It was a real pleasure for them to meet
        those kids. The feeling and the satisfaction cannot be put into words.
      </p>
      <br />
      {makeCarousel([
        "/gallery/2016/image113.jpg",
        "/gallery/2016/image118.jpg",
      ])}
      <br />
      <p>
        Jaago Bharat hails and supports the strong and farsighted decision of UP
        government to ban the use of polythene absolutely. To promote the cause,
        we distributed recyclable bags to the shop keepers and locals in
        Ghaziabad. We all shall support this move to save our Environment.
      </p>
      <br />
      {makeCarousel(["/gallery/2016/image83.jpg"])}
      <br />
      <p>
        Members of Jaago Bharat team, putting reflector tapes at the rear of
        rickshaws and E- rickshaws at various places in Noida. Team covered
        around a hundred of such rickshaws and were happy by the warm greetings
        extended by rickshaw pullers.
      </p>
      <br />
      {makeCarousel(["/gallery/2016/image33.jpg", "/gallery/2016/image89.jpg"])}
      <br />
      <p>
        Team Jaago Bharat undertook the responsibility of spreading awareness
        about the dire need of managing the bio-degradable waste. To make it a
        point we cleared and cleaned the cycle track and Pedestrian walkway near
        Stellar IT park, Sec-62, Noida which had been completely converted to a
        dump yard. We segregated the collected waste into bio-degradable and
        non- biodegradable. The bio-degradable waste was disposed off using
        Khamba (wet waste composter) which converts the waste into fine manure
        within 40-45 days. Non-biodegradable waste was handed over to Kabadi
        walas, which we will later send for recycling.
      </p>
      <br />
      {makeCarousel(["/gallery/2016/image5.jpg", "/gallery/2016/image23.jpg"])}
      <br />
    </div>
    <div>
      <h3>Events held in 2017</h3>
      <br />
      <p>
        Team Jaago Bharat always enjoys spending time with these little kids as
        they fill our heart with happiness and joy. We organized an event to
        spend some quality time with the children.
      </p>
      <br />
      {makeCarousel(["/gallery/2017/image92.jpg", "/gallery/2017/image21.jpg"])}
      <br />
      <p>
        Team Jaago Bharat launched a new campaign "Mera Kachra, Meri Zimmedari"
        to create awareness for waste management among masses. The campaign was
        started from sector-62, Noida as a cycle rally. All the team members
        cycled to India gate distributing pamphlets to spread awareness. Team
        also performed a short play on cleanliness and waste management. The
        audience appreciated the move and more than 200 people also signed a
        cleanliness pledge to not to litter.
      </p>
      <br />
      {makeCarousel(["/gallery/2017/image37.jpg", "/gallery/2017/image10.jpg"])}
      <br />
      <p>
        Team Jaago Bharat always finds privilege in spending time with the
        little kids. We believe that the future of our country should be in
        right hands and well educated. Team Jaago Bharat in collaboration with
        Donation club distributed stationary items like notebooks, pen &
        pencils, etc. to the students of Parimal Paathshala, sector-62, Noida.
      </p>
      <br />
      {makeCarousel(["/gallery/2017/image22.jpg", "/gallery/2017/image38.jpg"])}
      <br />
      <p>
        Continuing the vision of Mr. Ranveer Joshi, Team Jaago Bharat in
        collaboration with Donation Club once again put Reflector tapes on cycle
        rickshaws, e-rickshaws and handicapped tricycles for their safety. We
        covered most of the metro station in Noida. The event was a success and
        attracted attention from traffic police.
      </p>
      <br />
      {makeCarousel(["/gallery/2017/image98.jpg", "/gallery/2017/image85.jpg"])}
      <br />
    </div>
    <div>
      <h3>Events held in 2018</h3>
      <br />
      <p>
        Team Jaago Bharat organized a creative session on waste management, wet
        waste & paper waste and how to segregate & compost wet waste. We
        presented our wet waste composter and our paper waste recycling solution
        to the residents of Sector 33, Noida. We got an overwhelming response
        from everyone.
      </p>
      <br />
      {makeCarousel(["/gallery/2018/image35.jpg"])}
      <br />
      <p>
        On Independence Day, Team Jaago Bharat organized a plantation drive at
        village Kheri Bhanauta, Greater Noida. The event was a great success and
        was attended by various college students.
      </p>
      <br />
      {makeCarousel([
        "/gallery/2018/image103.jpg",
        "/gallery/2018/image87.jpg",
      ])}
      <br />
      <p>
        On Independence Day, Team Jaago Bharat organized a plantation drive at
        village Kheri Bhanauta, Greater Noida. The event was a great success and
        was attended by various college students.
      </p>
      <br />
      {makeCarousel(["/gallery/2018/image39.jpg", "/gallery/2018/image66.jpg"])}
      <br />
      <p>
        Team JAAGO BHARAT has celebrated Children's Day with cancer suffering
        children at St. Jude India childcare center.
      </p>
      <br />
      {makeCarousel(["/gallery/2018/image40.jpg", "/gallery/2018/image42.jpg"])}
      <br />
    </div>
    <div>
      <h3>Events held in 2019</h3>
      <br />
      <p>
        Team Jaago Bharat spread the awareness about importance of waste
        management among the students of "Humara Kartavya". After interaction
        with the lovely kids, we distributed sweets to them. We all had a great
        time with the kids.
      </p>
      <br />
      {makeCarousel(["/gallery/2019/image43.jpg", "/gallery/2019/image65.jpg"])}
      <br />
      <p>
        On 150th birth anniversary of Father of Nation ‘Mahatma Gandhi’, we
        organized a painting competition at Crossing Republic, Ghaziabad. The
        theme of the competition was "Waste management & water conservation".
        All the children enthusiastically participated in this competition.
      </p>
      <br />
      {makeCarousel(["/gallery/2019/image31.jpg", "/gallery/2019/image88.jpg"])}
      <br />
      <p>
        2nd October, On completion of 5th year of the launch of Swachh Bharat
        Abhiyan, Greater Noida authority organised an event in which Jaago
        Bharat participated proactively. Jaago Bharat show cased their Wet waste
        composter and told every participant & audience about it and how to use
        it.
      </p>
      <br />
      {makeCarousel(["/gallery/2019/image7.jpg", "/gallery/2019/image8.jpg"])}
      <br />
      <p>
        Team Jaago Bharat donated all the different kind of books received as
        donations to us at Lal Bahadur Shastri library, Sadullapur, Greater
        Noida on 2nd October. The village has students of all age groups i.e.
        from primary to college students, who are preparing for different
        competitive examination.
      </p>
      <br />
      {makeCarousel(["/gallery/2019/image9.jpg"])}
      <br />
      <p>
        Team Jaago Bharat and SAFE organization with some other volunteers who
        are working towards different environmental problems contributed in
        cleaning a part of wetland in Surajpur, Greater Noida.
      </p>
      <br />
      {makeCarousel(["/gallery/2019/image2.jpg", "/gallery/2019/image41.jpg"])}
      <br />
    </div>
    <div>
      <h3>Events held in 2020</h3>
      <br />
      <p>
        On 71st Republic Day Team Jaago Bharat in collaboration with the team
        SAFE organized an educational trip to the Surajpur Wetland, Greater
        Noida with Grads International School, Greater Noida. Children got the
        opportunity to learn about the birds residing in and migrating to these
        wetlands. The goal of this initiative was to make the coming generation
        learn about the natural habitats. Certificates and refreshments were
        also given after the trip.
      </p>
      <br />
      {makeCarousel([
        "/gallery/2020/image24.jpg",
        "/gallery/2020/image101.jpg",
      ])}
      <br />
      <p>
        In continuation of Mission 2020, Team Jaago Bharat along with team SAFE
        planted trees at Ch. Charan Singh Kushti academy, Bamheta, Ghaziabad.
        The participants included members of Jaago Bharat, employees of
        Cognizant, village Pradhaan, and others. The event also included
        interesting interactive session where everyone shared their concern
        about the environment and discussed the possible steps to preserve it.
      </p>
      <br />
      {makeCarousel(["/gallery/2020/image36.jpg"])}
      <br />
      <p>
        On National Science Day - 28th February, Team Jaago Bharat in
        collaboration with Team SAFE organized an event at Grads School, Greater
        Noida to spread awareness about wetlands. The event was attended by the
        students, teachers and staff of the school. The event included
        interesting activities like interactive sessions with the students from
        grade 1 to 8. These sessions focused on the importance, functions and
        problems related with wetlands. The team also attended the science fair
        and got to know about different science projects/models prepared by the
        students.
      </p>
      <br />
      {makeCarousel(["/gallery/2020/image6.jpg", "/gallery/2020/image3.jpg"])}
      <br />
      <p>
        To help the daily wage workers who are in a crisis situation amid the
        Corona virus pandemic, Team Jaago Bharat distributed ration kits near
        Stellar IT park, sector-62, Noida. We also discussed about the other
        problems they are facing currently and told them about the importance of
        cleanliness and social distancing.
      </p>
      <br />
      {makeCarousel(["/gallery/2020/image1.jpg", "/gallery/2020/image122.jpg"])}
      <br />
      <p>
        On 74th Independence Day, Team Jaago Bharat organized a webinar on the
        topic ‘True meaning of independence at the time of COVID-19’. Our guest
        speakers made this webinar a great success. We all received many
        valuable insights.
      </p>
      <br />
      {makeCarousel(["/gallery/2020/image29.jpg"])}
      <br />
      <p>
        On 2nd October 2020, we organized a Webinar on "Waste Management", our
        esteemed speakers walked us through the whole Waste Management process,
        its importance and how everyone can bring it in practice easily in
        day-to-day life.
      </p>
      <br />
      {makeCarousel(["/gallery/2020/image26.jpg"])}
      <br />
      <p>
        After our first successful distribution done on 22/05/2020 , we are back
        with another distribution of the ration kits on 31/05/2020. This is the
        time that we have to stand together to support those who need our help.
        We have organized another ration distribution drive successfully on 31st
        May,2020.
      </p>
      <br />
      {makeCarousel(["/gallery/2020/image32.jpg", "/gallery/2020/image34.jpg"])}
      <br />
      <p>
        To help workers who are living without wages due to Corona Pandemic,
        Team Jaago Bharat donated ration kits to 82 families in Noida Sector 70.
        Most of the families were construction workers living on the sites or
        domestic help which are not working due to the covid restrictions.
      </p>
      <br />
      {makeCarousel(["/gallery/2020/image28.jpg", "/gallery/2020/image27.jpg"])}
      <br />
    </div>
    <div>
      <h3>Events held in 2021</h3>
      <br />
      <p>
        On 26th January, on the occasion of Republic Day team Jaago Bharat
        officially and physically started with our project Ecobrick. Today's
        event was all about collecting plastic waste from the societies and put
        to better use in the environment so that we can keep the harmful single
        use plastic away from our surroundings while putting them to a better
        use.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image71.jpg", "/gallery/2021/image70.jpg"])}
      <br />
      <p>
        Cleanliness is a responsibility of every individual. World class Noida
        took initiative to clean some of the sectors of Noida along with the
        residents. Jaago Bharat team also participated in the event.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image72.jpg", "/gallery/2021/image73.jpg"])}
      <br />
      <p>
        On 21 February, 2021, the mass movement against *Single use plastic* was
        jointly undertaken by “World Class Noida, Volunteers137, Nav Urja Yuva
        Sansthan, Yuva Team Sarfabad, UshaKiran, RWA - 51 & 52, Jaago
        Bharat,Rama Foundation & Humara Kartavya”. More than 500 residents from
        across 50 sectors participated in this Mega Event and collected about
        1300 Kg of such plastic.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image75.jpg"])}
      <br />
      <p>
        ON 7th March Jaago Bharat team with the help of Humara Kartavy
        organization conducted a session to give insights about ecobricks to
        children, we demonstrated what ecobricks are and how they are made to
        the group of children's. The students seemed to like this project and
        participated enthusiastically.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image77.jpg", "/gallery/2021/image79.jpg"])}
      <br />
      <p>
        On 21st March, 2021 an online event themed "Wheels of change" was
        conducted to celebrate Jaago Bharat’s 7 years of work anniversary. Our
        founding members along with many social workers described their work
        experience with the organization. We hope that we shall continue all the
        good work for our surroundings, environment and therefore our country.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image82.jpg", "/gallery/2021/image67.jpg"])}
      <br />
      <p>
        Team Jaago Bharat kickstarted Project #Vastrआय amidst the ongoing
        pandemic to help different sections of the society. The name of the
        project is self-explanatory- Vastr means clothes and आय means income. We
        started by upcycling old clothes to stand by our principle of zero
        wastage.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image68.jpg", "/gallery/2021/image69.jpg"])}
      <br />
      <p>
        On 14th May 2021, Masks were donated to Noida police officers. We
        appreciate the efforts of the Noida Police officials who are tirelessly
        working day and night to keep us safe even after knowing the risks of
        getting infected with covid-19.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image52.jpg", "/gallery/2021/image54.jpg"])}
      <br />
      <p>
        5th June,2021- an online webinar was conducted on “World Environment
        Day” by Jaago Bharat Events & Awareness Team. The speakers discussed
        topics such as sustainability and waste management.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image56.jpg", "/gallery/2021/image58.jpg"])}
      <br />
      <p>
        On 5th June, 2021 Jaago Bharat team in collaboration with Om blood bank
        organized a blood donation drive. Donors showed up in good numbers
        making this blood donation drive a success.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image60.jpg", "/gallery/2021/image61.jpg"])}
      <br />
      <p>
        On 14th June, Dettol India affirmed our work in Dettol salutes movement
        and provided us with a special pack stating our social work.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image45.jpg", "/gallery/2021/image63.jpg"])}
      <br />
      <p>
        June-July: Jaago Bharat is assisting hundreds of women to make
        Eco-bricks that will help prevent plastic waste from disrupting the
        ecosystem. Sakhi network has been supporting us in our endeavor and
        connecting us with Self Help Groups. We have been encouraging people to
        create eco-bricks from plastic bottles and single-use plastic.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image47.jpg", "/gallery/2021/image48.jpg"])}
      <br />
      <p>
        On 27th June, Jaago Bharat team conducted an online session on Eco-brick
        and Plastic waste management. A lot of school children showed up in the
        webinar making the event an informative session for young minds.
      </p>
      <br />
      {makeCarousel([
        "/gallery/2021/image56.jpg",
        "/gallery/2021/image109.jpg",
      ])}
      <br />
      <p>
        On 4th July, Jaago Bharat in collaboration with MYLOKTANTRA organized an
        ecobrick workshop. The team enumerated on the procedure to make
        eco-bricks using plastic bottles and plastic waste to the members of the
        Sakhi Network. Jaago Bharat is considering to buy eco-bricks from them,
        which will create employment opportunities. These eco-bricks will be
        used to manufacture a toilet by Enactus Jesus & Mary college
      </p>
      <br />
      {makeCarousel([
        "/gallery/2021/image111.jpg",
        "/gallery/2021/image114.jpg",
      ])}
      <br />
      <p>
        Jaago Bharat team visited Noida Sector 28 on 17th July 2021 to meet
        "Colonel Nara Ji" regarding Vermicomposting project which has been
        running successfully there since 2014. Colonel Nara elucidated on the
        whole working of the vermicomposting project and disclosed all the
        requirements of the project.
      </p>
      <br />
      {makeCarousel([
        "/gallery/2021/image116.jpg",
        "/gallery/2021/image117.jpg",
      ])}
      <br />
      <p>
        On 18th July 2021, members of Jaago Bharat visited Sector 47, Noida to
        meet Mrs. Madhu to learn more about the entire process of waste
        management- from the segregation of waste to the preparation of compost
        via Bin Composting. She also guided us with the roadmap of her journey
        to setup the Bin composting project in her society.
      </p>
      <br />
      {makeCarousel([
        "/gallery/2021/image119.jpg",
        "/gallery/2021/image18.jpg",
      ])}
      <br />
      <p>
        Jaago Bharat organized a webinar on 24th July 2021, on the topic “Waste
        segregation and solutions implemented by the societies “. It was an
        interactive session wherein members from different societies elaborated
        the different ways in which their respective society is managing waste
        in an efficient manner.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image17.jpg", "/gallery/2021/image20.jpg"])}
      <br />
      <p>
        Jaago Bharat Events & Awareness Team, in collaboration with Rotaract
        club and Jhundpura library conducted a book donation drive on 24th July
        2021. Under the aim of "Charity for literacy," Jaago Bharat and Rotaract
        club donated over 800+ books combined to Jhundpura library in sector 11,
        Noida.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image14.jpg", "/gallery/2021/image19.jpg"])}
      <br />
      <p>
        On 8th August 2021, Jaago Bharat team members organized a plastic
        cleaning drive at Sector 25, Noida. The team cleaned about 3 big bags of
        dirty plastic waste collected from the streets of Noida. The cleaned
        plastic was handed over to MyLoktantra foundation for processing this
        plastic and making ecobricks.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image13.jpg", "/gallery/2021/image16.jpg"])}
      <br />
      <p>
        On 11th August 2021, Jaago Bharat team members and helpers performed an
        exciting nukkad Natak on the topic of *Corona- एक महामारी जो सबपे पड़ी
        भारी* on the oath taking ceremony of the Federation of Noida Residents
        Welfare Association. There were many prominent personalities present in
        the program. Jaago Bharat team was highly appreciated by everyone
        present at the event for the nukkad natak performance.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image15.jpg", "/gallery/2021/image12.jpg"])}
      <br />
      <p>
        On the occasion of 75th Independence Day, Jaago Bharat team members and
        helpers presented a nukkad natak on the topic "Corona- एक महामारी जो
        सबपे पड़ी भारी" at Sector 100, Century Apartments, Noida. There were
        small children and elderly people who were able to understand the
        importance of vaccination, they enjoyed the performance.
      </p>
      <br />
      {makeCarousel([
        "/gallery/2021/image11.jpg",
        "/gallery/2021/image100.jpg",
      ])}
      <br />
      <p>
        On 29th August 2021, Jaago Bharat organized a fun activity named “Retort
        Hunter” which included several rounds and competitions. We saw a healthy
        participation from school children and other people. The winners of the
        competition were rewarded and all the proceeds were utilized towards
        Jaago Bharat social initiatives.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image96.jpg", "/gallery/2021/image95.jpg"])}
      <br />
      <p>
        On 4th September 2021, Jaago Bharat team took part in a sparrow house
        installation event organized by volunteers 137 at Sector 137, Noida.
        Usha Kiran NGO children were also present at the event and brought
        handmade nests. Jaago Bharat team members installed sparrow houses on a
        number of trees and the positive impact was visible within a few days.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image99.jpg", "/gallery/2021/image97.jpg"])}
      <br />
      <p>
        Jaago Bharat team visited the slums of Sector 107, Noida to set up a
        vermicomposting bed and to urge people to get vaccinated. The team
        addressed issues such as smell associated with vermi beds and litter
        collection around the beds. The team also measured the new potential
        site for the placement of vermined and pondered over the various
        possibilities of putting a shed over the vermibed.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image91.jpg", "/gallery/2021/image90.jpg"])}
      <br />
      <p>
        On 12th September Jaago Bharat team members went for the event “Hindi
        humari pehchaan” on the occasion of Hindi Divas at Sector 137, Noida
        organized by Amar Ujala. The event was mainly concentrated on promoting
        the usage of the Hindi language in today's society.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image94.jpg"])}
      <br />
      <p>
        On occasion of World Cleanup Day 2021 Jaago Bharat Team along with Nav
        Urja Yuva Sanstha and Dawoodi Bohra Community held a cleanliness and
        Single Use Plastic collection drive in Ganga Shopping Complex and
        Brahmaputra Market, Noida. This drive was majorly focused on raising
        awareness about the threat of Single Use Plastic put in our environment.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image93.jpg", "/gallery/2021/image86.jpg"])}
      <br />
      <p>
        On 19th September Team Jaago Bharat visited Paramount Society,
        Sector-137. We assisted in the process of reviving the already set-up
        Wet Waste Management System. Our team will be providing suggestions
        based on today's activity on how the existing system can be useful in
        converting daily wet waste generated in the society to high class
        manure.
      </p>
      <br />
      {makeCarousel([
        "/gallery/2021/image121.jpg",
        "/gallery/2021/image120.jpg",
      ])}
      <br />
      <p>
        Jaago Bharat along with several prominent NGOs kicked off a 3-day
        Cleanliness Drive on the occasion of Gandhi Jayanti and Lal Bahadur
        Shastri Jayanti. Our team helped in collecting single-use plastic from
        several areas all over Noida. This plastic will be used for making
        ecobricks and provide employment opportunities to lesser privileged
        women.
      </p>
      <br />
      {makeCarousel([
        "/gallery/2021/image110.jpg",
        "/gallery/2021/image108.jpg",
      ])}
      <br />
      <p>
        On 19th October, 2021 Jaago Bharat Team along with Rotaract club of
        Delhi Rajdhani interacted with the female students of The Earth Paradise
        School, Sector-31, Noida on the importance of menstrual hygiene and
        sanitation. We also conducted a session on Ecobricks and waste
        management. A kit containing Sanitary Pads, Moisturizers and Masks were
        given to each attendee. In total, the team distributed about120 kits
        amongst the children. Children participated in an interactive Q& A
        session as well.
      </p>
      <br />
      {makeCarousel([
        "/gallery/2021/image115.jpg",
        "/gallery/2021/image112.jpg",
      ])}
      <br />
      <p>
        On 7th November, 2021 Team Jaago Bharat set-up Vermicomposting plant at
        GRADS International School, Greater Noida. Jaago Bharat team interacted
        with students, taught them about the entire process and selected a few
        of them as ambassadors to take care of the Vermibed in the school.
        Children were brought to the site and everyone contributed in kick
        starting the process of vermicomposting, following which Jaago Bharat
        members distributed chocolates amongst the children.
      </p>
      <br />
      {makeCarousel([
        "/gallery/2021/image105.jpg",
        "/gallery/2021/image14.jpg",
      ])}
      <br />
      <p>
        On 7th November, 2021 Jaago Bharat was awarded by IMA, PetriMed CA and
        GRADS International School. Jaago Bharat was given this award for the
        social work undertaken by the team to help those in need in the times of
        requirement. The award was given by Ms. Pooja Bisht.
      </p>
      <br />
      {makeCarousel([
        "/gallery/2021/image107.jpg",
        "/gallery/2021/image106.jpg",
      ])}
      <br />
      <p>
        8th November, 2021- Jaago Bharat organized a stall at GRADS
        International School wherein we displayed products such as sparrow
        houses, ecobricks and upcycled cloth bags. The bags and ecobricks were
        made by ladies in Self Help Groups of Sector-16 slum area managed by
        MYLOKTANTRA. The sparrow houses were made by Jaago Bharat team
        volunteers and were a crowd pleaser.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image59.jpg", "/gallery/2021/image64.jpg"])}
      <br />
      <p>
        On 20th November 2021 Jaago Bharat Events & Awareness Team, in
        association with Rotary Club, Noida organized a blood donation camp near
        sector 18 metro station. A total of 17 units of blood was collected. We
        got a good variety of blood including some rare blood groups like AB
        +ve, O -ve. It was a successful campaign as we had a total of 25 people
        who were willing to donate. All the donors were given blood test
        reports, coffee mugs and certificates.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image62.jpg", "/gallery/2021/image53.jpg"])}
      <br />
      <p>
        12th December 2021- On the occasion of the 1st year anniversary of the
        inauguration of Kailash Mansarovar Bhawan, Indirapuram- Jaago Bharat
        conducted a socio-cultural program themed “Going Green” to spread
        environmental awareness. The team invited children from Humara Kartavy
        and Nirbhed Foundation to participate in various activities such as
        skits, dances, poster making and storytelling. All the participants were
        given plantable seed pencils to promote a culture of tree planting.
        Jaago Bharat also set-up a stall to present the NGOs products such as
        Vastraay bags, pot composts, eco-bricks and bird nests. The team was
        felicitated by an award from the chief guests- Mr. Rakesh Kumar Singh
        (DM Ghaziabad) and Mrs. Ritu Sahas (ADM Ghaziabad).
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image51.jpg", "/gallery/2021/image57.jpg"])}
      <br />
      <p>
        On 14th December 2021, Jaago Bharat Team did a survey at Grads
        International School, Greater Noida to check up on the vermicomposting
        plant there. The team observed the set-up is working well, earthworms
        are alive and are generating great quality compost.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image55.jpg", "/gallery/2021/image46.jpg"])}
      <br />
      <p>
        On 25th December 2021, the Jaago Bharat team celebrated Christmas with
        the children from St. Jude India Child Care Centre, Noida. St. Jude’s
        caters to the needs of underprivileged children suffering from cancer.
        Jaago Bharat secured funds to purchase toys and snacks for the kids.
        Jaago Bharat members, along with volunteers from GBU College organized
        various games to play with the kids. It was an amazing experience as we
        were able to bring a smile on the kids’ faces.
      </p>
      <br />
      {makeCarousel(["/gallery/2021/image44.jpg", "/gallery/2021/image49.jpg"])}
      <br />
    </div>
    <div>
      <h3>Events held in 2022</h3>
      <br />
      <p>
        On 26th January, 2022, the Jaago Bharat team celebrated the 73rd
        Republic Day by conducting a webinar on “Right to Know the Right
        Information”. The webinar was graced by the presence of RTI activists
        Mr. Ranjan Tomar and Mr. Amit Gupta. They shared their personal
        experiences and the challenges they had to face while filing the RTIs.
        They also emphasized on the significance of filing RTIs in order to
        ensure effective governance in the society. All in all, it was an
        enriching and informative session.
      </p>
      <br />
      {makeCarousel(["/gallery/2022/image76.jpg", "/gallery/2022/image74.jpg"])}
      <br />
      <p>
        On 29 January, 2022, the Jaago Bharat Wet Waste management team invited
        bio-enzyme expert Prabha Juglani to conduct an online workshop to
        discuss the steps required to make bio-enzymes and organic pesticides at
        home.
      </p>
      <br />
      {makeCarousel(["/gallery/2022/image81.png", "/gallery/2022/image78.png"])}
      <br />
    </div>
  </div>
);

<div>
  <h3>Events held in 2022</h3>
  <br />
  <p>
    Our very first initiative is to save nature. In September 2014, Jaago Bharat
    Team floated information in public through talking with them, self-driving
    cycle for 66 km and distributing pamphlets.
  </p>
  <br />
  {makeCarousel(["/gallery/2022/image102.jpg", "/gallery/2022/image102.jpg"])}
  <br />
</div>;

const Publications = (
  <div style={{ textAlign: "center" }}>
    <h1>This will be updated shortly!</h1>
  </div>
);
const AnnualReport = (
  <div style={{ textAlign: "center" }}>
    <h1>This will be updated shortly!</h1>
  </div>
);
const GetInvolved = (
  <div style={{ textAlign: "center" }}>
    <h1>This will be updated shortly!</h1>
  </div>
);
const Donate = (
  <div style={{ textAlign: "center" }}>
    <h1>This will be updated shortly!</h1>
  </div>
);

const Ourfounder = (
  <>
    <div style={{ textAlign: "left" }}>
      <p>
        <img
          src={founder}
          alt=""
          srcset=""
          style={{ height: "18rem", borderRadius: "10%" }}
        />
        <br />
        <br />
        <h5
          style={{
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
          }}
        >
          Mr Prashasti Tripathi - The founder of Jaago Bharat Trust
        </h5>
        <br />
        He is in alumini of IIT kanpur and has started his own coaching academy
        and in the year 2014, he decided to start an NGO to contribute something
        towards society. Step by step he gathered people of his contacts and
        form the team. He always promotes the new ideas of his team members and
        wanted them to lead, so he was a major support system for our project
        S.M.I.L.E and waste management. His main focus was always to promote
        education and water conservation , so timely he has organised event with
        orphanage & slum childrens and provide them things like stationary items
        and edible items. At last in 2019 he convinced his society (GAIL) people
        to install rainwater harvesting. Basic design, model was prepared by him
        only.
      </p>
    </div>
  </>
);

const TdStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  @media (max-width: 998px) {
    grid-template-columns: auto;
  }
`;
const TrStyle = styled.div`
  padding: 1rem;
  text-align: center;
`;
const Ourteam = (
  <div style={{ textAlign: "left" }}>
    The Jaago Bharat team makes it safe and easy for anyone to support
    community-led change around the world. No matter what our title or area of
    expertise is, we’re united by the conviction that a better world is
    possible, as long as communities are in the driver’s seat of change.
    <br />
    <br />
    <TdStyle>
      <TrStyle>
        <span style={{ fontWeight: "bolder", fontSize: "1.2rem" }}>
          Founding Member
        </span>{" "}
        <br /> <br />
        <span style={{ fontWeight: "bold" }}> Mr. Vikram negi</span> <br />{" "}
        <br />{" "}
        <a href="/" style={{ color: "blue" }}>
          LinkedIn link
        </a>
      </TrStyle>
      <TrStyle>
        <span style={{ fontWeight: "bolder", fontSize: "1.2rem" }}>
          Founding Member{" "}
        </span>
        <br /> <br />
        <span style={{ fontWeight: "bold" }}> Mr. Vikram negi</span> <br />{" "}
        <br />{" "}
        <a href="/" style={{ color: "blue" }}>
          LinkedIn link
        </a>
      </TrStyle>
      <TrStyle>
        <span style={{ fontWeight: "bolder", fontSize: "1.2rem" }}>
          Founding Member
        </span>{" "}
        <br /> <br />
        <span style={{ fontWeight: "bold" }}>
          {" "}
          Mr. Sumit Agarwal
        </span> <br /> <br />{" "}
        <a href="/" style={{ color: "blue" }}>
          LinkedIn link
        </a>
      </TrStyle>
      <TrStyle>
        <span style={{ fontWeight: "bolder", fontSize: "1.2rem" }}>HR </span>
        <br /> <br />
        <span style={{ fontWeight: "bold" }}> Ms. Amisha Mehta </span>
        <br /> <br />{" "}
        <a href="/" style={{ color: "blue" }}>
          LinkedIn link
        </a>
      </TrStyle>
      <TrStyle>
        <span style={{ fontWeight: "bolder", fontSize: "1.2rem" }}>
          Team Leader
        </span>{" "}
        <br /> <br />{" "}
        <span style={{ fontWeight: "bold" }}>Mr. Vikram negi</span> <br />{" "}
        <br />{" "}
        <a href="/" style={{ color: "blue" }}>
          LinkedIn link
        </a>
      </TrStyle>
      <TrStyle>
        <span style={{ fontWeight: "bolder", fontSize: "1.2rem" }}>
          Team Leader
        </span>
        <br /> <br />{" "}
        <span style={{ fontWeight: "bold" }}>Ms. Videhi Shah</span> <br />{" "}
        <br />{" "}
        <a href="/" style={{ color: "blue" }}>
          LinkedIn link
        </a>
      </TrStyle>
    </TdStyle>
    ;
  </div>
);
const Weth2 = styled.h2`
  margin-bottom: 1rem;
  letterspacing: 0.1rem;
  lineheight: 2rem;
  fontweight: 600;
`;
const Wetp = styled.p`
  letterspacing: 0.1rem;
  lineheight: 2rem;
  padding: 1rem 0rem;
`;
const Spanh3 = styled.p`
  letterspacing: 0.1rem;
  lineheight: 2rem;
  fontsize: 1.3rem;
  font-weight: 900;
  display: inline-block;
  color: grey;
`;
const Wet_waste_management = (
  <div style={{ textAlign: "center" }}>
    <Weth2>About Project</Weth2>
    <Wetp>
      From 2016 our NGO used to conduct cleanliness drive. In our drive we also
      segregate wet waste and dry waste. The wet waste was given to cow to eat
      and dry waste was given to small recyclers.
      <br />
    </Wetp>
    <Wetp>
      {" "}
      In 2018 we started our project known as Wet waste composting, we had made
      our wet waste composter to promote home composting.
      <br />
    </Wetp>
    <Wetp>
      {" "}
      In 2020 we started to search for a society level composting project. In
      Oct 2021 we implement vermicompost model in GRADS International School, Gr
      Noida.
      <br />
    </Wetp>
    <Weth2>What is the project about</Weth2>
    <Wetp>
      Wet waste is totally biodegradable and is good for soil if decomposed
      properly. We have come up with a solution to decompose your wet waste.
      <br />
    </Wetp>
    <Wetp>
      Home composting : We have the Wet Waste Composter that can convert your
      wet waste (Only Kitchen Wet Waste) into fertiliser in 30 to 40 days by
      using a small and easy process given by us.
      <br />
    </Wetp>
    <Wetp>
      {" "}
      Vermicomposting: If you want to implement a composting model for your
      society or institution then
      <br />
      Vermicomposting is the best solution. We provide technical as well as help
      you to implement the vermi. Plant in your premise.
      <br />
    </Wetp>
    <Weth2>Why we need this</Weth2>
    <Wetp>
      According to Times of India Noida generates 600 tonnes of solid waste
      every day. According to solid waste management rules 2016 every waste
      generator or gated societies or institution (more than 5000 sq m) has to
      ensure segregation of the waste in separate bins, handover recyclable
      material to authorised recyclers, processing of biodegradable waste into
      manure.
      <br />
    </Wetp>
    <Wetp>
      {" "}
      We help individual waste generator or society/ institution to start making
      compost from their wet waste.
    </Wetp>
    <Weth2>What problems are we solving ?</Weth2>
    <Wetp>
      <ul>
        <li>
          <br />
          <Spanh3>Waste generation : </Spanh3>According to NITI Aayog and CSE,
          it is estimated that urban India generates between 1,30,000 to
          1,50,000 metric tonne (MT) of municipal solid waste every day – some
          330-550 gramme per urban inhabitant a day. This adds up to roughly 50
          million MT per year; at current rates, this will jump to some 125
          million MT a year by 2031. All over India 30 per. waste is properly
          disposed rest is untreated.
        </li>
        <li>
          <br />
          By using our techniques you can atleast reduce your society/ home wet
          waste. <br />
          <br />
          <Spanh3>Water Contamination:</Spanh3> Due to open waste thrown on
          streets, landfill it’s polluting the ground water like Chromium 6 is
          coming out from borewell at Tamil Nadu.{" "}
        </li>
        <li>
          <br />
          <Spanh3>Air pollution due to landfill catching fire:</Spanh3> Recent
          examples Ghazipur and Bhalswa landfill sites burning for more than a
          week. Health problem & death also occurs for rag pickers living near
          the landfill sites.
          <br />
        </li>
      </ul>
    </Wetp>
    <Weth2>What we get after installing or doing this</Weth2>
    <Wetp>
      <ul>
        <li>
          It creates good awareness among people and fulfil our motto “मेरा कचरा
          मेरी जिम्मेदारी “
        </li>
        <br />
        <li>
          We learnt a lot of technical things from this project also the NGO
          members were able to make a ‘Smart Wet waste composter’ as their final
          year project in college.
        </li>
        <br />
        <li>
          Our composter has been awarded second prize in Regional science &
          technology exhibition by UP govt.
        </li>
        <br />
        <img
          className="widthclass"
          src={wet_waste_1}
          alt=""
          srcset=""
          style={{ margin: "auto" }}
        />
        <br />
        <li>
          Jb establishes a process / system of Team secretary, ambassadors,
          gardeners, school teacher, students to monitor the model of
          Vermicomposting in GRADS school. The system involving certain checks
          and balances in which every role is defined for every level, makes the
          model sustainable and long lasting.
        </li>
      </ul>
    </Wetp>
    <Weth2>Feedback from people</Weth2>
    <Wetp>
      <br />
      <p>
        More than 12 families across Noida, Greater Noida region are using our
        wet waste composter and their feedback are:-
        <br />
        <Spanh3>Mrs. Madhu ji from sector 47 NOIDA.</Spanh3>
        <br /> “Jaago Bharat NGO ka home composter with starting kit is very
        useful and easy to handle. It has two pot with 10-15 holes and two
        stands to keep under matkas. Very gud social initiative by Jaago Bharat
        and its volunteers. I purchased it immediately when I saw it and using
        to process our wet kitchen waste daily.”
      </p>
      <img src={wet_waste_3} alt="" style={{ width: "85%" }} />
      <p>
        <br />
        <Spanh3>Mrs Garima Tripathi ji from homes 121 Noida.</Spanh3>
        <br /> “We are preparing manure from wet waste in these composters for
        last one year. This is very easiest and simplest method of home
        Composting.
      </p>
      <img src={wet_waste_4} alt="" style={{ width: "85%" }} />
      <p>
        <br />
        <Spanh3>Mr Ashok Kumar from Greater Noida </Spanh3>
        <br />
        “This is the most easy way of home composting. You can start composting
        in your home as their is no smell or insects nearby it. I do wish more
        people would take it on- its so easy.”
      </p>
      <img src={wet_waste_5} alt="" style={{ width: "85%" }} />
      <p>
        <br />
        <Spanh3>Vermicomposting Inaugration at GRADS School</Spanh3>
      </p>
      <img src={wet_waste_6} alt="" style={{ width: "85%" }} />
      <br />
    </Wetp>
    <Weth2>Collaboration</Weth2>
    <br />
    <Spanh3>
      <br />
      GRADS International school for creating a good mechanism in which school
      teachers, students, gardeners all participated.
    </Spanh3>
    <Weth2>Impact in terms of numbers</Weth2>
    <br />
    <Spanh3 style={{ color: "black" }}>Home composting:</Spanh3>
    <br />
    <Spanh3>
      As 12 families started composting so 21.6 kg of wet waste per day started
      converting into manure. <br />
      (1 family has generates 1.8kg of waste per day)
      <br />
      Instead buying manure they starting making their own manure from their
      kitchen waste to grow vegetables in their gardens.
      <br />
    </Spanh3>
    <br />
    <Spanh3 style={{ color: "black" }}>Vermicomposting:</Spanh3>
    <br />
    <Spanh3>
      <br />
      Grads school starts converting their garden waste to manure and generates
      approx 9 kg of manure every month <br />
      (The major source of waste for GRADS is garden waste plus the rotten
      vegetables, so 50 to 60 kg of garden waste generated per month.
      <br /> As per calculation 1 tonne of compostable waste gives 150 Kg of
      compost.) <br />
      They also started using manure in their garden, earlier they use to buy
      manure and now they are converting their garden waste to highly enriched
      black manure.
      <br />
    </Spanh3>
  </div>
);

const WaterConservation = (
  <>
    <div style={{ textAlign: "center" }}>
      <Weth2>Report on Rainwater Harvesting Project: Noida</Weth2>
      <Weth2>About the Project:</Weth2>
      <Wetp>
        <ul>
          <li>
            This project talks about the implementation of a rainwater
            harvesting project.
          </li>
          <li>
            The project demonstrates its commitment in adopting good practices
            in sustainable water management
          </li>
          <li>
            Rainwater harvesting is the accumulation and storage of rainwater
            for reuse.
            <br /> Rainwater can be collected from rivers, roof tops and the
            water collected is directed to a deep pit. The water percolates and
            gets stored in the pit. This is not just an economical practice but
            is sustainable too.
          </li>
        </ul>
      </Wetp>
      <Weth2>What is the project about?</Weth2>
      <Wetp>
        The project talks about the implementation of Rainwater Harvesting
        project First project started at GAIL apartment, Sector 62, Noida.
      </Wetp>
      <Weth2>Why we need this?</Weth2>
      <Wetp>
        <ul>
          <li>
            Water conservation is the need of the hour. Scarcity of water is a
            serious concern that the world is facing now. In the year 2019
            Chennai, a city in South India witnessed a complete dry out of the
            reservoirs. A report by NITI Aayog, said that if methods for water
            conservation in India are not implemented, another 20 cities
            including Bengaluru, Delhi and Hyderabad would run out of
            groundwater in the next few years.
          </li>
          <li>
            The city of Noida has seen a significant declining trend (up to 40
            mbgl) because of over-extraction. Since the area is surrounded by
            the river Yamuna, all the storm water drains into it. However,
            because of increased paved areas and declining waterbodies in Noida,
            the area cannot sustain high rainfall intensity and is prone to
            floods and waterlogging as well as depleting groundwater levels.
          </li>
          <li>
            The city of Noida has seen a significant declining trend (up to 40
            mbgl) because of over-extraction. Since the area is surrounded by
            the river Yamuna, all the storm water drains into it. However,
            because of increased paved areas and declining waterbodies in Noida,
            the area cannot sustain high rainfall intensity and is prone to
            floods and waterlogging as well as depleting groundwater levels.
          </li>
        </ul>
      </Wetp>
      <Weth2>What problem we are solving?</Weth2>
      <Wetp>
        The team worked on this implementation due to severe decrease in
        groundwater levels. The quality of groundwater is also not upto the
        mark. Rainwater harvesting is an effective method of conserving natural
        water (rainwater) & replenishing the water table.
      </Wetp>
      <Weth2>What we get after installing or doing this?</Weth2>
      <Wetp>
        <p>
          Here is a general representation of how a typical RWH system works
        </p>
        <img
          className="widthclass"
          src={Water_conservation_1}
          alt=""
          style={{ margin: "2.4% auto" }}
        />
        <p>
          The outcome of the project would be a complete set up that can collect
          the rainwater & stored in the tank.
        </p>
      </Wetp>
      <Weth2>Some of the benefits of a RWH initiative are:</Weth2>
      <Wetp>
        <ul>
          <li>It is low cost to construct and maintained.</li>
          <li>
            It replenishes the ground water level which is then distributed
            evenly for the nearby areas.
          </li>
          <li>
            It helps reduce peak demands during summer months, thereby reducing
            the burden on water table.
          </li>
        </ul>
      </Wetp>
      <Weth2>Impact in terms of numbers:</Weth2>
      <Wetp>
        The project costed around INR 37K including digging, labor, plumber,
        charcoal & pebbles (for filtration), iron made grill for holding
        charcoal & pebbles, cover lid, & blockage channel. The setup is now able
        to conserve 14,38,900 liters of water every year.
      </Wetp>
    </div>
  </>
);
const SMILE = (
  <>
    <div style={{ textAlign: "center" }}>
      <Weth2>About Project </Weth2>
      <Wetp>
        Project SMILE was started on 31st Dec 2017 by enthusiastic college
        students who want to contribute something to society. It’s first phase
        started from 31st dec 2017 to 31st Jan 2018 Second phase started from
        March 2018 to Dec 2019.
      </Wetp>
      <Weth2>What is the project about</Weth2>
      <Wetp>
        Project S.M.I.L.E stands for:-
        <br />
        <br />
        <Spanh3>SKILLING THE UNDERPRIVILEGED</Spanh3>
        <br />
        <Spanh3>MANAGING USED PAPER</Spanh3>
        <br />
        <Spanh3>INSTILLING SELF CONFIDENCE</Spanh3>
        <br />
        <Spanh3>INSTILLING SELF CONFIDENCE</Spanh3>
        <br />
        <Spanh3>INSTILLING SELF CONFIDENCE</Spanh3>
      </Wetp>
      <Weth2>Why we need this</Weth2>
      <Wetp>
        Project S.M.I.L.E caters as a single solution to this three-fold
        problem. We generate employment and empower the unskilled and lesser
        privileged sections of our society. This not only makes them financially
        independent, but also increases their employability. The notebooks are
        made from recycled paper, thus directly reducing the amount of paper
        that is wasted. Some of the copies that are made and the old books that
        we get during collection are given to the slum children.
      </Wetp>
      <Weth2>What problems are we solving ?</Weth2>
      <Wetp>
        <ul>
          <li>
            <br />
            <Spanh3>PAPER WASTE :</Spanh3>In India, annually, more than
            9,000,000 tonnes of paper is dumped in landfills while only
            3,000,000 gets recycled, leading to increased deforestation.
          </li>
          <li>
            <br />
            <Spanh3>Unemployability & unskilled labour :</Spanh3>According to a
            report published by the Centre for Monitoring Indian Economy (CMIE),
            India has 53 million unemployed people as of Dec 202 also according
            to the latest India Skills Report (ISR), not even half the Indian
            graduates are employable as they lack the skills that are in demand
            today. A mere 45 percent of 2021 graduates were found to be
            job-ready.
          </li>
          <li>
            <br />
            <Spanh3>Lack of will & resources to provide education :</Spanh3>Lack
            of will & resources to provide education
          </li>
        </ul>
      </Wetp>
      <Weth2>What we get after installing or doing this</Weth2>
      <Wetp>
        <ul>
          <li>
            With the First phase not only we provided a short term extra source
            of income to underprivileged people but also within the first phase
            of this project the core team of Jaago Bharat got established.
          </li>
          <li>
            <br />
            <Spanh3>S.M.I.L.E.</Spanh3>has different stages like : collecting
            paper waste, getting raw materials, workplace, workers, final
            product and selling the copies.
          </li>
          <li>
            By working in this project, team members learned the skills of pre
            planning, having regular discussion, maintaining the workplace &
            workers and their marketing skills got increased. Ultimately these
            adds a good profile in their resume and this really helped in their
            job interview.
          </li>
          <li>
            Started from 31st dec 2017 and finished on 25th Dec 2019, two phases
            got more than 200 hours of volunteering work done.
          </li>
        </ul>
      </Wetp>

      <Weth2>Feedback from people</Weth2>
      <Wetp>
        <ul>
          <li>
            Volunteer friends, college teachers, school teachers all helped them
            in buying the notebooks.
          </li>
          <li>
            <br />
            <Spanh3>
              In the second phase the copies were made by the parents whose
              children are having cancer and they belong to an underprivileged
              background, so they don’t have enough money for their treatment.
              So the copies made by them were sold and the money raised was all
              donated to the treatment of the children.
            </Spanh3>
          </li>
        </ul>
      </Wetp>
      <Weth2>Collaboration</Weth2>
      <Wetp>
        <ul>
          <li>
            Aadi Kautilya coaching academy- Who helped in this project
            financially as well as helped in selling the notebooks to their own
            students.
          </li>
          <li>
            St Jude India Child care centre – Who provided the workspace and
            workers to make the copies for the second phase.
          </li>
          <li>
            Assisi Convent school sec 17 Noida – Provided workspace & workers
            for first phase , purchased copy from us and given paper waste in
            both phases.
          </li>
          <li>
            GTBIT college theatre group- for giving us a space to put our stall
            in their fest
          </li>
        </ul>
      </Wetp>
      <Weth2>Impact of project in numbers</Weth2>
      <Wetp>
        <br />
        <Spanh3>Phase 1</Spanh3>
        Phase 1 From 31st Dec 2017 to 31st Jan 2018 :-
        <br />
        Paper waste collected – 552 kg
        <br />
        Recycled sheets used in copies – 25000 sheets
        <br />
        Copies made – 268 spiral notebooks made from recycled sheets
        <br />
        Workers involved that were trained – 5<br />
        Phase 2 from March 2018 to Dec 2019 :-
        <br />
        Paper waste collected – 916 kg
        <br />
        Recycled sheets used in copies – 23000 sheets
        <br />
        Copies made – 302 spiral notebooks made from recycled sheets
        <br />
        Workers involved that were trained – 12
        <br />
        By combining both the phases, the paper that we recycled (48000 sheets)
        accounts equal to 16 trees.
        <br />
        (Calculation – 3000 sheets cost one tree, so total 48000 sheets will
        cost 16 trees)
        <br />
        (To make one fresh A4 size sheet paper used in notebooks requires 10
        litre of water.)
        <br />
        As we used 48000 recycled sheets for making notebooks, it saves 4,80,000
        litres of water.
        <br />
      </Wetp>
      <img className="widthclass" src={Smile} alt="" srcset="" />
    </div>
  </>
);
const Ecobrick = (
  <>
    <div style={{ textAlign: "center" }}>
      <Weth2>About Project</Weth2>
      <Wetp>
        We got an idea about the concept of Ecobrick in March 2020. We did one
        year of research on that in which we got to know the persons living in
        Delhi NCR who are working in this.
        <br />
        <br />
        By March 2021 we collaborated with Enactus JMC and started making
        Ecobricks.
      </Wetp>
      <Weth2>What is the project about</Weth2>
      <Wetp>
        An ecobrick is a PET bottle packed solid with clean and dry plastics,
        meaning it’s a
        <br />
        <br />
        plastic bottle packed with used plastic to set density and to prevent
        the growth of bacteria.
        <br />
        <br />
        We collaborated with Enactus JMC to build a public toilet out of
        Ecobrick in Delhi for slum women. The project is going on and our aim is
        to make 2000 ecobricks made out of 1 litre plastic bottles and non
        recyclable clean & dry plastic waste.
        <br />
      </Wetp>

      <Weth2>Why we need this</Weth2>
      <Wetp>
        Project Ecobrick caters as a single solution to this three-fold problem.
        It helps to eradicate the problem of non recyclable plastic waste which
        generally goes to landfill. Also it allows every individual who uses
        plastic for his personal use, to act on their plastic waste and upscale
        it to something more useful.
        <br />
        <br />
        We generate employment and empower the slum womens by training them on
        how to make ecobricks. This not only support their livelihood, but also
        increases their employability.
        <br />
        <br />
        The Ecobricks made has many practical applications like apart using them
        to make structures it can also be used to create stools, seats, tables
        and various other things for household purposes
        <br />
      </Wetp>
      <img src={ecobrick1} alt="" style={{ width: "85%", margin: "auto" }} />
      <Weth2>What problems are we solving ?</Weth2>
      <Wetp>
        <ul>
          <li>
            <br />
            <Spanh3>Plastic Waste scenario :</Spanh3>
            According to Union Environment Minister Bhupender Yadav, India
            generates 3.5 million tonnes of plastic waste annually. The only way
            to solve this problem is the person/family/community who generates
            this waste, takes initiative to reduce its plastic waste.
          </li>
          <li>
            <br />
            <Spanh3>Lack of skilled women labour: </Spanh3>Data from the
            Periodic Labour Force Survey (PLFS) (2019-20) shows female labour
            force participation at 22.8 percent, compared to a far higher 56.8
            percent for men. The data shows that women’s presence in the
            workforce dropped to 16.9 percent following the first year of the
            pandemic, while for men it remained largely the same.
          </li>
          <li>
            <br />
            <Spanh3>PET bottles waste :</Spanh3> According to industry data,
            more than 14 lakh tonnes of PET plastics are consumed annually in
            India, even with the world’s highest recycling rate of 80 per cent.
            About 2.8 lakh tonnes of plastic bottles waste never gets collected.
          </li>
        </ul>
      </Wetp>
      <img
        src={ecobrick2}
        alt=""
        srcset=""
        style={{ width: "85%", margin: "auto" }}
      />
      <Weth2>What we get after installing or doing this</Weth2>
      <Wetp>
        <ul>
          <li>
            We trained more than 20 slum women on how to make ecobricks.
            Ecobrick making can be done from their home itself, so during COVID
            it became a good source of extra income.
          </li>
          <li>
            They became skilled and hence this project itself promotes Women
            empowerment.
          </li>
          <li>
            Our Team member organised several cleanliness drives in Noida, where
            we picked up the plastic from streets & parks lying there for
            several days or even months, cleaned it and used it in Ecobrick
            making.
          </li>
          <li>
            Volunteers learnt a lot of things of managing operational costs,
            planning to pick huge sums of plastic, convincing people and mall
            authorities to give their plastic.
          </li>
        </ul>
      </Wetp>

      <div className="changedisplay">
        <div>
          <Weth2>Feedback from people:</Weth2>
          <Wetp>
            <ul>
              <li>
                A lot of NGO’s like Humara Kartavy and schools like GRADS
                International school & Earth Paradise school started making
                Ecobrick by seeing our sessions, videos etc.
              </li>
              <li>
                Societies, malls and market areas collected their clean plastic
                waste and started giving it to us.
              </li>
              <li>
                Many children got connected with this project and they started
                making Ecobrick by their own.
              </li>
              <li>
                JB put a stall and made products like small stool, flower pot,
                bench, dustbin from Ecobricks and it was showcased to public in
                Ghaziabad.
              </li>
            </ul>
          </Wetp>
        </div>
        <div>
          <img className="widthclass" src={ecobrick3} alt="" />
        </div>
      </div>
      <Weth2>Collaboration</Weth2>
      <Wetp>
        <ul>
          <li>
            We collaborated with Enactus JMC to supply them 2000 Ecobricks for
            their Project Sugam which aims to make public toilet made out of
            Ecobrick.
          </li>
          <li>
            We collaborated with Myloktantra to provide us the group of self
            help ladies which will make our Ecobricks.
          </li>
          <li>
            We came in contact with several malls, recyclers, societies and our
            efficient volunteers who provided us with the bottles and plastic
            waste.
          </li>
        </ul>
      </Wetp>
      <div className="layerimage">
        <br />
        <Weth2 style={{ background: "white", width: "75%", margin: "auto" }}>
          IMPACT OF PROJECT:{" "}
        </Weth2>
        <br />
        Plastic waste collected from March 2021 to April 2022 : <br />
        <br />
        100 kattas of plastic waste collected equals to 245 kg upcycled in
        Ecobrick making
        <br />
        <br />
        (1 katta of plastic involving packaging, LDP plastic equals to 2.7 kg of
        weight)
        <br />
        <br />
        Plastic bottles collected from March 2021 to April 2022 : <br />
        <br />
        900 PET bottles waste of 1 litre collected from Rajasthan, Noida,
        Greater Noida, Delhi
        <br />
        <br />
        Women Empowered or trained = more than 20
        <br />
        <br />
        More than 300 hours of volunteering happened
        <br />
        <br />
        <br />
      </div>
      <br />
      <div className="changedisplay">
        <div style={{ width: "60%", margin: "auto" }}>
          <img className="widthclass" src={ecobrick5} alt="" />
        </div>
        <div>
          <h3>Ecobrick sitting bench</h3>
        </div>
      </div>
      <br />
      <div className="changedisplay">
        <div style={{ width: "60%", margin: "auto" }}>
          <img className="widthclass" src={ecobrick6} alt="" />
        </div>
        <div>
          <h3>Ecobrick sitting stool</h3>
        </div>
      </div>
      <br />
      <div className="changedisplay">
        <div style={{ width: "60%", margin: "auto" }}>
          <img className="widthclass" src={ecobrick7} alt="" />
        </div>
        <div>
          <h3>Ecobrick Dustbin</h3>
        </div>
      </div>
      <br />
      <img className="widthclass" src={ecobrick8} alt="" />
      <br />
      <br />
      <img className="widthclass" src={ecobrick9} alt="" />
      <br />
      <br />
      <img className="widthclass" src={ecobrick10} alt="" />
      <br />
      <br />
      <img src={ecobrick11} alt="" className="widthclass" />
      <br />
      <br />
      <img src={ecobrick12} alt="" className="widthclass" />
      <br />
      <br />
    </div>
  </>
);

export {
  Who_we_are,
  What_we_do,
  Ourstory,
  Ourfounder,
  Ourteam,
  Wet_waste_management,
  WaterConservation,
  SMILE,
  Overview,
  Partners,
  Gallery,
  Publications,
  AnnualReport,
  GetInvolved,
  Donate,
  Ecobrick,
};
