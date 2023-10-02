import CountUp from "react-countup";
import "./counter.css";


export default function Count(props) {
  return (
    <div className="count">
      <h1 className="count-head">{props.title}</h1>
      <CountUp
        className="count-text"
        start={0}
        end={props.limit}
        duration={props.time}
        enableScrollSpy={true}
      />
    </div>
  );
}
