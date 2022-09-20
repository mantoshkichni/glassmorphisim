import VanillaTilt from "vanilla-tilt";
import "./styles.scss";

export default function App() {
  return (
    <div className="container">
      <div className="firstcircle"></div>
      <div className="seccircle"></div>
      <div className="thirdcircle"></div>
      <div className="fourthcircle"></div>
      <div className="fifthcircle"></div>
      <div className="sixthcircle"></div>
      <div className="seventhcircle"></div>
      <div className="eightcircle"></div>

      <div className="card " data-tilt>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some happen!</h2>
      </div>
    </div>
  );
}
