import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import axios from 'axios';
import Karakterler from "./components/Karakterler";
import Header from "./Header";


import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion} from 'reactstrap';

const CenteredBox = styled(Accordion)`
  width: 100%;
  justify-content: left;
  align-items: left;
  padding : 2% 15%;
  text-align : left;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const [karakterler, setKarakterler] = useState([])

  useEffect(
    () => {
      const url = "https://swapi.dev/api/people/";
      axios.get(url)
      .then((response)=>{
        setKarakterler(response.data);
      }).catch(err => {
        console.log("error", err );
      })
    }, []) 

  return (//<!--<Header />
    
    <div className="App">
      <Header/>
      <Karakterler karakterler= {karakterler}/>
        
      
      


    </div>
  );
}

export default App;
