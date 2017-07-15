
import React from "react";
import Steps, { Step } from "rc-steps";
import { compose, withState, withHandlers, lifecycle } from "recompose";
import Styles from 'Styles/Services.css';
import Step2 from "./step2";
import { Person } from './testimony';
import { Grid } from 'semantic-ui-react';
import { Message, Icon } from 'semantic-ui-react'
import Video from "./video";

import trails from "Assets/Scooters.webm";
const content = [
  {
    image: "moving-2.jpg",
    heading: "Same Day Delivery",
    details: "Every day, we deliver items on behalf of thousands of retailers, businesses and individuals within Kenya. \
    Same Day deliveries ranges from small envelopes to large pallets of packages. Our team of couriers are well trained\
     and can handle your packages…large or small."
  },
  {
    image: "Cargo.jpg",
    heading: "International Courier Services",
    details: "We offer an end to end cross border delivery service which includes picking, dispatching, clearing and forwarding, and delivery."
  },
  {
    image: "bulkWarehouse.jpg",
    heading: "Storage and Warehousing services",
    details: "Storage and warehousing service is offered as a single service or as a package with transportation"
  },
  {
    image: "hauling.jpg",
    heading: "Hauling and Bulk Material handling",
    details: "We offer hauling services for bulky materials"
  },
  {
    image: "bike.jpg",
    heading: "Messenger services ",
    details: "We offer outsourced Messengerial services we provide  personnel to undertake menial jobs of filing and postage."
  },
]

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
    <Icon name="mail outline" />
    email: info@interwidecs.com
    <br />
    <Icon name="coffee" />
    Location: Nanak House, Nairobi, Kenya
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
