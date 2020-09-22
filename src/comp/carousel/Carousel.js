import React, { useState } from 'react';
import { ArrowBackRounded, ArrowForwardRounded } from '@material-ui/icons';
import './Carousel.css';
import { Card, CardContent } from '@material-ui/core';
import * as R from 'ramda';
import HorizontalScroll from 'react-scroll-horizontal';

export default function carousel(props) {
  // get a list of cards
  // A card has the following propeties:
  // Title
  // Logo
  // Summary
  const { cards } = props;
//   const [animValue, setAnimValue] = useState(0);
  let content = [];

  cards.forEach((card) => {
    console.warn(card);
    content.push(
      <div className='cardStuff'>
        <Card >
          <CardContent >
            <div className='card_content'>
              <img
                id='icon'
                src={R.path(['image', 'src'], card)}
                alt={R.path(['image', 'alt'], card)}
              />
              <p>{R.prop('summary', card)}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  });

  return (
    <Card>
      <CardContent>
        <div id='carousel'>
          {/* This is where we will place the arrow left */}
          <div className='arrow'>
            <ArrowBackRounded fontSize='large' />
          </div>
          {/* This is space for the cards */}
          <div id='content'>
            <HorizontalScroll config={{ stiffness: 40, damping: 3 }} animValues={0}>{content}</HorizontalScroll>
            {/* {content} */}
          </div>
          {/* This is the space for the arrow right */}
          <div className='arrow'>
            <ArrowForwardRounded onPress={()=>{alert("hello")}} fontSize='large' />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
