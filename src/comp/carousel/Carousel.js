import React from 'react'
import { ArrowBackRounded, ArrowForwardRounded } from '@material-ui/icons'
import './Carousel.css'
import { Card, CardContent } from '@material-ui/core'
import * as R from 'ramda'
export default function carousel(props) {
    // get a list of cards
    // A card has the following propeties:
    // Title
    // Logo
    // Summary 
    const { cards } = props;
    let content = [];

    cards.forEach((card) => {
        console.warn(card)
        content.push(<Card><CardContent><p className="cardTitle">{R.prop('title', card)}</p><img id="icon" src={R.path(['image', 'src'], card)} alt={R.path(['image', 'alt'], card)} /><p>{R.prop('summary', card)}</p></CardContent></Card>)
    })

    return (
        <Card>
            <CardContent>
                <div id="carousel">
                    {/* This is where we will place the arrow left */}
                    <div className="arrow">
                        <ArrowBackRounded fontSize="large" />
                    </div>
                    {/* This is space for the cards */}
                    <div id="content">
                        {content}
                        {/* <Card><CardContent></CardContent></Card>
                        <Card><CardContent></CardContent></Card>
                        <Card><CardContent></CardContent></Card>
                        <Card><CardContent></CardContent></Card>
                        <Card><CardContent></CardContent></Card>
                        <Card><CardContent></CardContent></Card>
                        <Card><CardContent></CardContent></Card> */}
                    </div>
                    {/* This is the space for the arrow right */}
                    <div className="arrow">
                        <ArrowForwardRounded fontSize="large" />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
