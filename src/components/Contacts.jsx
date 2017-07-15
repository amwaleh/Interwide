import React from "react";
import Styles from "Styles/Services.css";
import { Message, Icon } from "semantic-ui-react";
import Iframe from "react-iframe";

const Contacts = () => (
  <div>
    <Iframe
      url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8177539689796!2d36.81961991475411!3d-1.283196299064077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d428d7c3f5%3A0x66d8f176d90de631!2sNanak+House%2C+Nairobi%2C+Kenya!5e0!3m2!1sen!2s!4v1497209423762"
      width="100%"
      height="100%"
      allowfullscreen
    />

    <div className={Styles.intro} style={{ height: "100vh", top: "70px" }}>

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
      <img
        src={require("Assets/sec.jpg")}
        style={{ maxWidth: "400px", display: "block" }}
      />
      <br />
      <Icon name="facebook square" size="big" />
      <Icon name="twitter" size="big" />

    </div>

  </div>
);

export default Contacts;
