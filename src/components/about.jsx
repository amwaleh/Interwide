import React from "react";
import Styles from 'Styles/Services.css';
import Step2 from "./step2";
import {Person} from './testimony';
import {Parallax} from 'react-parallax';
import {Message, Icon, Divider} from 'semantic-ui-react'
import {ContentLinks} from 'Components/services'


const MessageExampleIcon = ({contents}) => (
    <div>
        {contents.map((content, id) => (
            <div key={id}>
                <a name={`${content.heading}`}></a>
                <Message icon className={!(id % 2) ? Styles.message : Styles.backgro}>

                    <img src={require(`Assets/${content.image}`)}/>
                    <Message.Content>
                        <Message.Header><h3> {content.heading} </h3></Message.Header>
                        <p className={Styles.content}>
                            {content.details}
                        </p>
                    </Message.Content>
                </Message>
            </div>
        ))

        }
    </div>
);;;;;;;;;;;;;;


const Intro = () => (
    <div className={Styles.intro}>
        <h3>Need a parcel or cargo delivered?</h3>
        <ContentLinks/>
        <p> Contact us:</p>
        <Icon name="phone"/>
        tel: +254 720 144 747
        <br />
        <Icon name="mail outline"/>
        email: info@interwidecs.com
        <br />
        <Icon name="coffee"/>
        Location: Nanak House, Nairobi, Kenya

    </div>

);;;;;;;;;;;;;;


const About = () => (
    <div className={Styles.about}>
        <div className={Styles.zoomWrapper}>
            <img src={require("Assets/service.jpg")} style={{height: '90vh', width: '100vw'}} className={Styles.zoom}/>
        </div>
        <Intro />
        <div className={Styles.mystepform} style={{width: "70vw"}}>
            <Divider horizontal><h3>Who we are</h3></Divider>
            <p>
                Interwide Courier Services provides professional transport and logistics services for a wide clientele
                with a global reach.
                We provide end to end professional services from collection, clearing and delivery.
                Headquartered at Nanak House, Fourth Floor we are able to centrally serve our clients and perform
                administrative functions.
            </p>
            <Divider horizontal><h3>Mission</h3></Divider>

            <p>Interwide Courier Services is committed to provide timely and reliable courier services through
                consistency.</p>

            <Divider horizontal><h3>Vision</h3></Divider>
            <p>Interwide’s vision is to be a world class courier service provider.</p>
        </div>
    </div>

);


export default About;

