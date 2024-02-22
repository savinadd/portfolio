// src/Timeline.js

import React from 'react';
import { Chrono } from 'react-chrono';
import '../styles/Timeline.css';


const Timeline = () => {
    
        const items = [{
            title: "First Thing",
            cardTitle: "First",
            url: "http://",
            cardSubtitle:"Lorem ipsum dolor",
            cardDetailedText: "Lorem ipsum dolor sit amet dolor sit amet al metus",
            
          },{
            title: "Second thing",
            cardTitle: "Second",
            url: "http://",
            cardSubtitle:"Lorem ipsum dolor",
            cardDetailedText: "Lorem ipsum dolor sit amet dolor sit amet al metus",
           },
           {
            title: "Third thing",
            cardTitle: "Third",
            url: "http://",
            cardSubtitle:"Lorem ipsum dolor",
            cardDetailedText: "Lorem ipsum dolor sit amet dolor sit amet al metus",
           } ];
  
      return (
        
        <div style={{ width: "1500px", height: "1500px", fontFamily: "Lato" }}>
          <Chrono items={items}  mode="VERTICAL_ALTERNATING" 
          
            theme={{
                primary: '#7AABE7',
                secondary: '#D78176',
                cardBgColor: 'white',
                titleColor: 'black',
                titleColorActive: 'white',
            }}
            fontSizes={{
                cardSubtitle: '0.85rem',
                cardText: '0.8rem',
                cardTitle: '1.5rem',
                title: '2rem',
            }}>
            
            
            </Chrono>
        </div>
      )
};

export default Timeline;

