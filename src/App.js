import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import axios from 'axios';
import Karakter from "./components/Karakter";
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
      //.then(response => response.json())
      //.then((data)=>{setKarakterler(data.results);})
      //.then((response)=>{
      //  setKarakterler(response.data);
      //}).catch(err => {
      //  console.log("error", err );
      //})
      .then((response) => {
        const ilkKarakter = response.data[0];
        const digerKarakterler = response.data.slice(1);

        // Set isOpen to true for the first character and false for the rest
        const charactersWithOpenState = [
          { ...ilkKarakter, isOpen: true },
          ...digerKarakterler.map((karakter) => ({ ...karakter, isOpen: false })),
        ];

        setKarakterler(charactersWithOpenState);
      });
  }, []);

  return (//<!--<Header />
    
    <div className="App">
      
      <h1 className="Header">Star Wars Karakterleri</h1>
      <CenteredBox>
        {karakterler.map((karakter)=> (
          <Karakter 
          key= {karakter.name}
          name= {karakter.name}
          gender = {karakter.gender}
          height= {karakter.height}
          mass={karakter.mass}
          birthYear = {karakter.birthYear}
          eye_color = {karakter.eye_color}
          hair_color = {karakter.hair_color}
          skin_color = {karakter.skin_color}
          films = {karakter.films}
          isOpen={karakter.isOpen}
          />
        ))
        }
      </CenteredBox>
      
    </div>
  );
}

export default App;
