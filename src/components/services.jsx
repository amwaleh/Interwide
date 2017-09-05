
import React from "react";
import Styles from 'Styles/Services.css';
import { Grid } from 'semantic-ui-react';
import { Message, Icon } from 'semantic-ui-react'
import Video from "./video";

import trails from "Assets/Scooters.webm";
import content from "./services.json";

export const ContentLinks = () => (
  <div className={Styles.links}>
    <h3>Services we Offer</h3>
    <ul>
      {content.map((item, i) => (
        <li key={i}>
          <Icon name='motorcycle' />
          <a href={`/services/#${item.heading}`}>
            {item.heading}
          </a>
        </li>
      ))
      }
    </ul>
  </div>
)


const MessageExampleIcon = ({ contents }) => (
  <Grid.Row>
    {contents.map((content, id) => (
      <Grid.Column key={id} mobile="16" tablet="8">
        <a name={`${content.heading}`}></a>
        <Message icon className={!(id % 2) ? Styles.message : Styles.backgro}>

          <img src={require(`Assets/${content.image}`)} style={{borderRadius: '10px'}}/>
          <Message.Content>
            <Message.Header> <h3> {content.heading} </h3></Message.Header>
            <p className={Styles.content}>
              {content.details}
            </p>
          </Message.Content>
        </Message>
      </Grid.Column>
    ))

    }
  </Grid.Row>
)



export const Intro = () => (
  <div className={Styles.intro}>
    <h3>Need a parcel or cargo delivered?</h3>
    <p> Contact us:</p>
      <Icon name="phone" />
      tel: +254 720 144 747
      <br />
      <Icon name="phone" />
      tel: +254 739 053 434
      <br />
    <Icon name="mail outline" />
    email: info@interwidecs.com
    <br />
    <Icon name="coffee" />
    Location:  Kimathi Street| Nanak house | 4th Floor | Suite 412
    </div>
)



const Services = () => (
  <Grid.Row>
    <Grid.Column>
      <div className={Styles.zoomWrapper}>
        {/*<img src={require("../assets/dist.jpg")} className={Styles.zoom} />*/}
         <Video path={trails} />
      </div>
    </Grid.Column>
    <Grid.Column>
      <Intro />
    </Grid.Column>

    <ContentLinks />
    <div className={Styles.mystepform}>
      <MessageExampleIcon contents={content} />
    </div>

  </Grid.Row>

);


export default Services;
