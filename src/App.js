import React, {useState} from "react";
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Entry from "./Entry";
import Card from "./Card";

const API_KEY = "RcaEK4ez23v4557bon3z3GO98Kh5TPgz3dJthgGf";
function App() {
  const [stateData, setStateData] = useState([]);
  async function getData(event) {
    const dataName = event.target.elements.dataName.value;
    event.preventDefault();
    const api_call = await fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=RcaEK4ez23v4557bon3z3GO98Kh5TPgz3dJthgGf');
    const data = await api_call.json();
    // console.log(data.near_earth_objects['2015-09-08']);
    const moreData = data.near_earth_objects['2015-09-08'];
    console.log(moreData);
    setStateData(moreData);
    // console.log(stateData);
  }
  
  function createEntry(cardTerm) {
    return (
      <Entry
        key={cardTerm.id}
        name={cardTerm.name}
        URL={cardTerm.imgURL}
        description={cardTerm.description}
      />
    );
  }

  return ( 
    <div>
      <Header/>
      <Form onClick={getData} />
      <dl className="planets"> {Card.map(createEntry)} </dl>
      <Footer/>
    </div>
  );
}

export default App;