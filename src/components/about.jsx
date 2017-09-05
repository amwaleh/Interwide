import React from "react";
import Styles from "Styles/Services.css";
import {Parallax} from "react-parallax";
import {Message, Icon, Divider} from "semantic-ui-react";
import {ContentLinks,Intro} from "Components/services";
import content from "./about.json";
import DownloadLink from 'react-download-link'

const MessageExampleIcon = ({ contents }) => (
  <div>
    {contents.map((content, id) => (
      <div key={id}>
        <a name={`${content.heading}`} />
        <Message icon className={!(id % 2) ? Styles.message : Styles.backgro}>
          <img src={require(`Assets/${content.image}`)} />
          <Message.Content>
            <Message.Header><h3> {content.heading} </h3></Message.Header>
            <p className={Styles.content}>
              {content.details}
            </p>
          </Message.Content>
        </Message>
      </div>
    ))}
  </div>
);


const Displaycontent = ({heading, content}) => (
    <div>
        <Divider horizontal><h3>{heading}</h3></Divider>
        <p>
            {content}
        </p>
    </div>
)


const About = () => (
  <div className={Styles.about}>
    <div className={Styles.zoomWrapper}>
      <img
        src={require("Assets/service.jpg")}
        style={{ height: "90vh", width: "100vw" }}
        className={Styles.zoom}
      />
    </div>
    <Intro />
    <div className={Styles.mystepform} style={{ width: "70vw" }}>
        {content.map((item) => <Displaycontent key={item.heading} {...item}/>)}
        <a href={require("Assets/ICS_Company_Profile.pdf")} download className={Styles.downloadLink}> <Icon name="download" /> download company profile (pdf)</a>

  </div>


  </div>
);

export default About;
