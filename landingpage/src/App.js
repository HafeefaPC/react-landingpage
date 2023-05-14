import React from "react";
import './style.css';

function App() {
  return (
    <div id="body">
      <Header />
      
      <Card
        className="section"
        img="./logo192.png"
        title="About the React"
        description="React (also known as React.js or ReactJS) is a free and open-source front-end
         JavaScript library  for building user interfaces based on components. 
        It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
       **************important**************"/>
      <Card
        className="section"
        img="./logo192.png"
        title="Notable features"
        description="React adheres to the declarative programming paradigm. Developers design views for each state of an application, 
        and React updates and renders components when data changes. This is in contrast with imperative programming."/>  
      <Card
        className="section"
        img="./logo192.png"
        title="Updates"
        description="When ReactDOM.render[22] is called again for the same component and target,
         React represents the new UI state in the Virtual DOM and determines which parts (if any) of the living DOM needs to change"/>

      <ContactContainer />
    </div>
  );
}
const Header = () => {
  return (
    <div className="header">
      <span className="welcome">
        Welcome to Reactjs
      </span>
      <br />
      <span className="header-text">
        React is a JavaScript library for building user
        interfaces.React is used to build single-page applications.
        React allows us to create resuable UI components
      </span>
    </div>
  );
}

const Card = (props) => {
  return (
    <div className={props.className}>
      <div className="small-div">
        <i className={props.className}></i>
        <img className="wow" src={props.img} alt='' />
      </div>
      <div className="big-div">
        <span className="div-title">
          {props.title}
        </span>
        <br />
        <span>
          {props.description}
        </span>
      </div>
    </div>
  );
}

const ContactContainer = () => {
  return (
    <div className="contac_details">
      <h1>Contact Details :</h1>
      <span>
        Email Id : hafeefapc2003@gmail.com
      </span>
      <br />
      <span>
        Phone Number:8921227224
      </span>
    </div>
  )
}
export default App;
