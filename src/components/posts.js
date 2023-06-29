import founder from "../images/trustee-photo-2.jpg";
// import ecobrick1 from '../images/ecobrick-0001-768x1087.png'
// import ecobrick2 from '../images/ecobrick-0002-768x1087.png'
// import ecobrick3 from '../images/ecobrick-0000-1-724x1024.png'
// import ecobrick4 from '../images/manure-1.png';
// import ecobrick5 from '../images/pasted image 0.png'
// import ecobrick6 from '../images/pasted image 0 (1).png'
// import ecobrick7 from '../images/pasted image 0 (2).png'
// import ecobrick8 from '../images/ecobrick-0007-1024x744.png'
// import ecobrick9 from '../images/image1.png'
// import ecobrick10 from '../images/image4.png'
// import ecobrick11 from '../images/image1.png'
// import ecobrick12 from '../images/image1.png'
import wet_waste_1 from "../images/wet_waste_1.jpg";
import wet_waste_3 from "../images/wet_waste_3.png";
import wet_waste_4 from "../images/wet_waste_4.png";
import wet_waste_5 from "../images/wet_waste_5.png";
import wet_waste_6 from "../images/wet_waste_6.png";
import Water_conservation_1 from "../images/Water_conservation_1.jpg";
import Smile from "../images/SMILE.jpg";
import styled from "styled-components";
const Posts1 = (
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
      We are an operational NGO, meaning we plan and carry out
      boots-on-the-ground projects to accomplish our objectives. This requires a
      great deal of careful planning, communication, and local involvement for
      each project.
    </p>
    ;
  </div>
);
const Post2 = (
  <div style={{ textAlign: "left" }}>
    Our main objectives include:
    <br />
    <br />
    <ul style={{ marginLeft: "3rem" }}>
      <li> Sustainable Development</li>
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
  </div>
);
const Ourstory = (
  <div style={{ textAlign: "left" }}>
    By 2014 Mr. Prashasti Tripathi Was persuaded that many important global
    development initiatives weren’t receiving the attention they deserved.
    Believing in importance of activism and responsibility among the citizens so
    that instead of complaining, people begin to perform their basic civic
    fundamental duties decided to establish an NGO to make a contribution to
    society. His main goal was to promote education and water conservation. A
    young leadership than approached in 2018, with an extended vision of
    re-imagine relationship with the earth, with each other and with urban
    spaces. Jaago Bharat is keen to deliver its services to larger audience
    across the region with right set of collaboration and partnerships from both
    for profit sector and social enterprises like SAFE. Jaago bharat integrates
    with other NGOs and government schemes to diminish the widening gap between
    informal sector and mainstream society.
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
        to install rainwater harvesting. Basic design , model was prepared by
        him only.
      </p>
    </div>
  </>
);

const TdStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  @media (max-width: 998px) {
    grid-template-columns: auto auto;
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
    possible, as long as communities are in the driver’s seat of change.<br/><br/><br/>
<TdStyle>
  <TrStyle><span style={{fontWeight:'bolder',fontSize:'1.2rem'}}>Founding Member</span> <br/> <br/><span style={{fontWeight:'bold'}}> Mr. Vikram negi</span> <br/> <br/>  <a href="/" style={{color:'blue'}}>LinkedIn link</a></TrStyle>
  <TrStyle><span style={{fontWeight:'bolder',fontSize:'1.2rem'}}>Founding Member </span><br/> <br/><span style={{fontWeight:'bold'}}> Mr. Vikram negi</span> <br/> <br/>  <a href="/" style={{color:'blue'}}>LinkedIn link</a></TrStyle>
  <TrStyle><span style={{fontWeight:'bolder',fontSize:'1.2rem'}}>Founding Member</span> <br/> <br/><span style={{fontWeight:'bold'}}> Mr. Sumit Agarwal</span> <br/> <br/>  <a href="/" style={{color:'blue'}}>LinkedIn link</a></TrStyle>
  <TrStyle><span style={{fontWeight:'bolder',fontSize:'1.2rem'}}>HR </span><br/> <br/><span style={{fontWeight:'bold'}}> Ms. Amisha Mehta </span><br/> <br/>  <a href="/" style={{color:'blue'}}>LinkedIn link</a></TrStyle>
  <TrStyle><span style={{fontWeight:'bolder',fontSize:'1.2rem'}}>Team Leader</span> <br/> <br/> <span style={{fontWeight:'bold'}}>Mr. Vikram negi</span> <br/> <br/>  <a href="/" style={{color:'blue'}}>LinkedIn link</a></TrStyle>
  <TrStyle><span style={{fontWeight:'bolder',fontSize:'1.2rem'}}>Team Leader</span><br/> <br/> <span style={{fontWeight:'bold'}}>Ms. Videhi Shah</span> <br/> <br/>  <a href="/" style={{color:'blue'}}>LinkedIn link</a></TrStyle>
</TdStyle>;
  </div>
);
const Weth2 = styled.h2`
  margin-bottom: 1rem;
  font-weight: 600;
`;
const Wetp = styled.p`
  padding: 1rem 0rem;
`;
const Spanh3 = styled.div`
  display: inline-block;
  color: grey;
`;
const Wet_waste_management = (
  <div style={{ textAlign: "center" }}>
    <Weth2>About Project</Weth2>
    <Wetp>
      From 2016 our NGO used to conduct cleanliness drive. In our drive we also
      segregate wet waste and dry waste. The wet waste was given to cow to eat
      and dry waste was given to small recyclers. In 2018 we started our project
      known as Wet waste composting, we had made our wet waste composter to
      promote home composting. In 2020 we started to search for a society level
      composting project. In Oct 2021 we implement vermicompost model in GRADS
      International School, Gr Noida.
    </Wetp>
    <Weth2>What is the project about</Weth2>
    <Wetp>
      Wet waste is totally biodegradable and is good for soil if decomposed
      properly. We have come up with a solution to decompose your wet waste.
      Home composting : We have the Wet Waste Composter that can convert your
      wet waste (Only Kitchen Wet Waste) into fertiliser in 30 to 40 days by
      using a small and easy process given by us. Vermicomposting: If you want
      to implement a composting model for your society or institution then
      Vermicomposting is the best solution. We provide technical as well as help
      you to implement the vermi. Plant in your premise.
    </Wetp>
    <Weth2>Why we need this</Weth2>
    <Wetp>
      According to Times of India Noida generates 600 tonnes of solid waste
      every day. According to solid waste management rules 2016 every waste
      generator or gated societies or institution (more than 5000 sq m) has to
      ensure segregation of the waste in separate bins, handover recyclable
      material to authorised recyclers, processing of biodegradable waste into
      manure. We help individual waste generator or society/ institution to
      start making compost from their wet waste.
    </Wetp>
    <Weth2>What problems are we solving ?</Weth2>
    <Wetp>
      <ul>
        <li>
          Waste generation : According to NITI Aayog and CSE, it is estimated
          that urban India generates between 1,30,000 to 1,50,000 metric tonne
          (MT) of municipal solid waste every day – some 330-550 gramme per
          urban inhabitant a day. This adds up to roughly 50 million MT per
          year; at current rates, this will jump to some 125 million MT a year
          by 2031. All over India 30 per. waste is properly disposed rest is
          untreated.
        </li>
        <li>
          By using our techniques you can atleast reduce your society/ home wet
          waste. Water Contamination: Due to open waste thrown on streets,
          landfill it’s polluting the ground water like Chromium 6 is coming out
          from borewell at Tamil Nadu. Air pollution due to landfill catching
          fire: Recent examples Ghazipur and Bhalswa landfill sites burning for
          more than a week. Health problem & death also occurs for rag pickers
          living near the landfill sites.
        </li>
        By using our techniques you can atleast reduce your society/ home wet
        waste.
        <li>
          By using our techniques you can atleast reduce your society/ home wet
          waste. Water Contamination: Due to open waste thrown on streets,
          landfill it’s polluting the ground water like Chromium 6 is coming out
          from borewell at Tamil Nadu. Air pollution due to landfill catching
          fire: Recent examples Ghazipur and Bhalswa landfill sites burning for
          more than a week. Health problem & death also occurs for rag pickers
          living near the landfill sites.
        </li>
        Health problem & death also occurs for rag pickers living near the
        landfill sites.{" "}
      </ul>
    </Wetp>
    <Weth2>What we get after installing or doing this</Weth2>
    <Wetp>
      <ul>
        <li>
          It creates good awareness among people and fulfil our motto “मेरा कचरा
          मेरी जिम्मेदारी “
        </li>
        <li>
          We learnt a lot of technical things from this project also the NGO
          members were able to make a ‘Smart Wet waste composter’ as their final
          year project in college.
        </li>
        <li>
          Our composter has been awarded second prize in Regional science &
          technology exhibition by UP govt.
        </li>
        <img
          src={wet_waste_1}
          alt=""
          srcset=""
          style={{ width: "50%", margin: "auto" }}
        />
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
      <p>
        More than 12 families across Noida, Greater Noida region are using our
        wet waste composter and their feedback are:- Mrs. Madhu ji from sector
        47 NOIDA. “Jaago Bharat NGO ka home composter with starting kit is very
        useful and easy to handle. It has two pot with 10-15 holes and two
        stands to keep under matkas. Very gud social initiative by Jaago Bharat
        and its volunteers. I purchased it immediately when I saw it and using
        to process our wet kitchen waste daily.”
      </p>
      <img src={wet_waste_3} alt="" style={{ width: "85%" }} />
      <p>
        Mrs Garima Tripathi ji from homes 121 Noida. “We are preparing manure
        from wet waste in these composters for last one year. This is very
        easiest and simplest method of home Composting.
      </p>
      <img src={wet_waste_4} alt="" style={{ width: "85%" }} />
      <p>
        Mr Ashok Kumar from Greater Noida “This is the most easy way of home
        composting. You can start composting in your home as their is no smell
        or insects nearby it. I do wish more people would take it on- its so
        easy.”
      </p>
      <img src={wet_waste_5} alt="" style={{ width: "85%" }} />
      <p>
        Mr Ashok Kumar from Greater Noida “This is the most easy way of home
        composting. You can start composting in your home as their is no smell
        or insects nearby it. I do wish more people would take it on- its so
        easy.”
      </p>
      <img src={wet_waste_6} alt="" style={{ width: "85%" }} />
    </Wetp>
    <Weth2>Collaboration</Weth2>
    <Spanh3>
      GRADS International school for creating a good mechanism in which school
      teachers, students, gardeners all participated.
    </Spanh3>
    <Weth2>Impact in terms of numbers</Weth2>
    <Spanh3 style={{ color: "black" }}>Home composting:</Spanh3>
    <Spanh3>
      As 12 families started composting so 21.6 kg of wet waste per day started
      converting into manure. (1 family has generates 1.8kg of waste per day)
      Instead buying manure they starting making their own manure from their
      kitchen waste to grow vegetables in their gardens.
    </Spanh3>
    <Spanh3 style={{ color: "black" }}>Vermicomposting:</Spanh3>
    <Spanh3>
      Grads school starts converting their garden waste to manure and generates
      approx 9 kg of manure every month (The major source of waste for GRADS is
      garden waste plus the rotten vegetables, so 50 to 60 kg of garden waste
      generated per month. As per calculation 1 tonne of compostable waste gives
      150 Kg of compost.) They also started using manure in their garden,
      earlier they use to buy manure and now they are converting their garden
      waste to highly enriched black manure.
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
          src={Water_conservation_1}
          alt=""
          style={{ width: "50%", margin: "2.4% auto" }}
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
        <Spanh3>SKILLING THE UNDERPRIVILEGED</Spanh3>
        <Spanh3>MANAGING USED PAPER</Spanh3>
        <Spanh3>INSTILLING SELF CONFIDENCE</Spanh3>
        <Spanh3>INSTILLING SELF CONFIDENCE</Spanh3>
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
            <Spanh3>PAPER WASTE :</Spanh3>In India, annually, more than
            9,000,000 tonnes of paper is dumped in landfills while only
            3,000,000 gets recycled, leading to increased deforestation.
          </li>
          <li>
            <Spanh3>Unemployability & unskilled labour :</Spanh3>According to a
            report published by the Centre for Monitoring Indian Economy (CMIE),
            India has 53 million unemployed people as of Dec 202 also according
            to the latest India Skills Report (ISR), not even half the Indian
            graduates are employable as they lack the skills that are in demand
            today. A mere 45 percent of 2021 graduates were found to be
            job-ready.
          </li>
          <li>
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
      <img src={Smile} alt="" srcset="" style={{ width: "50%" }} />
    </div>
  </>
);
export {
  Posts1,
  Post2,
  Ourstory,
  Ourfounder,
  Ourteam,
  Wet_waste_management,
  WaterConservation,
  SMILE,
};
