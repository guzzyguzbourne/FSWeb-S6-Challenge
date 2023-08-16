// Karakter bileşeniniz buraya gelecek
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion} from 'reactstrap';
import styled from 'styled-components';
import KarakterNew from "./KarakterNew";



export default function Karakterler(props) = {
        const {karakterler} = props;
        const [open, setOpen] = useState('1');
        const toggle = (id) => {
          if (open === id) {
            setOpen();
          } else {
            setOpen(id);
          }
        };
      
        return (
          <div>
            <Accordion open={open} toggle={toggle}>
            {
                karakterler.map((karakter,index) =>{
          <KarakterNew key= {index} karakterNew={karakter} index= {index}/>
        })}
            </Accordion>
          </div>
        );
      }