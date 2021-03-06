import React from "react";
import Video from "./video";
import { Card, Icon, Image } from "semantic-ui-react";
import ServiceBar from "./servicebar";
import Testimony from "./testimony";
import Styles from "../styles/container.css";
import "video-react/dist/video-react.css";

const TESTIMONY = require("./testimonials.json");

const extra = (
  <a>
      <div>
      <a href="https://www.facebook.com/interwidecs/" target="_blank"><Icon name="facebook square" size="big" /></a>
      <a href="https://twitter.com/ics_interwide" target="_blank"> <Icon name="twitter" size="big" /></a>
      <a href="https://www.linkedin.com/company-beta/18157055/admin/overview/" target="_blank"> <Icon name="linkedin" size="big" /></a>
      </div>
      <Icon name="phone" />
      tel: +254 720 144 747
      <br /> <Icon name="phone" />
      tel: +254 739 053 434
      <br />
      <Icon name="mail outline" />
      email: info@interwidecs.com
    <br />
    <Icon name="coffee" />
    Location:  Kimathi Street| Nanak house | 4th Floor | Suite 412

  </a>
);

const ContainerBody = () => (
  <div>
    <Video path={require("../assets/Puzzling.webm")} />
    <div className={Styles.header}>
      <h1> Welcome to Interwide courier services </h1>
      <Card
        image={require("../assets/sec.jpg")}
        header="Interwide Courier Services"
        meta="Courier Services"
        description="Offering the best courier services in East Africa"
        extra={extra}
      />

    </div>

    <div className={Styles.banner}>
      <Image src={require("../assets/noun_1046456_cc.png")} alt="" />
      <div className={Styles.content}>

        <h3>Providing the best service in East Africa </h3>
        <p>
          We provide end to end professional services from collection, clearing and delivery.
          We are committed to provide timely and reliable courier services through consistency.
        </p>
      </div>

    </div>
    <div className={Styles.servicesSection}>
      <h3> Our Services </h3>
      <ServiceBar />
    </div>
    <div className={Styles.mission}>
      <Image src={require("../assets/smiling.jpg")} alt="" />

    </div>

    <div className={Styles.testimonies}>
      <h2>Testimonials</h2>

      <Testimony testimonies={TESTIMONY} />{" "}
    </div>
  </div>
);

export default ContainerBody;
