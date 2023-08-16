// Karakter bileşeniniz buraya gelecek
import React, {useState} from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem} from 'reactstrap';

const StyledParagraf = styled.p`
      font-size: 15px;
    `;

const StyledHead = styled(AccordionHeader)`
    font-size: 1rem;
  `;



const Karakter = (props) => {
  const { name, gender, height, mass, birthYear, eye_color, hair_color, skin_color, films, isOpen } = props;
  const [acik, setAcik] = useState('1');
  
  const toggle = (id) => {
    if (acik === id) {
      setAcik();
    } else {
      setAcik(id);
    }
  };

  return (
    <div>
      <Accordion open={acik} toggle={toggle} >
        <AccordionItem isOpen={isOpen} >
          <StyledHead targetId="1" >{name}</StyledHead>
          <AccordionBody accordionId="1">
              <StyledParagraf>Gender: {gender}</StyledParagraf>
              <StyledParagraf>Height: {height}</StyledParagraf>
              <StyledParagraf>Mass: {mass}</StyledParagraf>
              <StyledParagraf>BirthYear: {birthYear}</StyledParagraf>
              <StyledParagraf>Eye Color: {eye_color}</StyledParagraf>
              <StyledParagraf>Hair Color: {hair_color}</StyledParagraf>
              <StyledParagraf>Skin Color: {skin_color}</StyledParagraf>
              <StyledParagraf>Appears in {films.length} films: </StyledParagraf>
            </AccordionBody>
        </AccordionItem>
        <AccordionItem targetId="2" >
          <AccordionBody accordionId="2">
              <ul>
                {films.map((film) => (
                  <li key={film}>{film}</li>
                  ))}
              </ul>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
/*
<ul>
              <li>Gender: {gender}</li>
              <li>Height: {height}</li>
              <li>Mass: {mass}</li>
              <li>BirthYear: {birthYear}</li>
              <li>Eye Color: {eye_color}</li>
              <li>Hair Color: {hair_color}</li>
              <li>Skin Color: {skin_color}</li>
              <li>Appears in {films.length} films:</li>
              <li>{films}</li>
            </ul>

    return (
      <StyledCharacter>
      <h3>{name}</h3>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>BirthYear: {birthYear}</p>
      <p>Eye Color: {eye_color}</p>
      <p>Hair Color: {hair_color}</p>
      <p>Skin Color: {skin_color}</p>
      <p>Appears in {films.length} films:</p>
      <p>{films}</p>
    </StyledCharacter>
    );
  };*/

export default Karakter;