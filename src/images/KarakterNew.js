// Karakter bileşeniniz buraya gelecek
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AccordionBody, AccordionHeader, AccordionItem} from 'reactstrap';
import styled from 'styled-components';




const KarakterNew = (props) => {

  const {karakterNew, index} = props;

  const Box = styled.div`
    justify-content: space-between;
    display: flex;
    border: 1px solid black;
    width: 40%;
    margin: 2% auto;
    bacground-color: rgba(256,256,256,0.3);
  `;

  const Name = styled.h2`
    color:black;
  `;
  
  const BirthYear = styled.p`
    background-color: black;
    font-size: 2rem;
    color: white;
    border-radius: 5px;
    margin: 5px;
    padding: 3px;
  `;

  

  return (
    //<Box>
    //  <Name>{name}</Name>
    //  <BirthYear>{birthYear}</BirthYear>
    //</Box>

    <AccordionItem>
      <AccordionHeader targetId="1">
      <Box>
        <Name> {karakterNew.name}<Name/>
        <BirthYear>{karakterNew.birthYear}</BirthYear>
      </Box>
      </AccordionHeader>
      <AccordionBody>

      </AccordionBody>
    </AccordionItem>
  );
};

export default Karakter;