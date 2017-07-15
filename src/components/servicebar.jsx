import React from 'react';

import Styles from '../styles/servicebar.css'


const BIKE = require ("../assets/noun_344077_cc.png")
const WAREHOUSE = require ("../assets/noun_891045_cc.png")
const FREIGHT = require ("../assets/noun_891066_cc.png")
const OVERNIGHT = require ("../assets/noun_891038_cc.png")
const DOOR2DOOR = require ("../assets/noun_1046456_cc.png")
const INTER = require ("../assets/noun_681797_cc.png")

const ServiceBar = () => (
    <div className={Styles.serviceBar}>
    <ul>
    <li> <img src={BIKE } />
     Same day delivery 
    </li>
    <li> <img src={FREIGHT } />
    Freight , Hauling and Bulk Material handling
    </li>
    <li> <img src={WAREHOUSE } />
    Storage and Warehousing services
    </li>
    <li> <img src={ OVERNIGHT } />
    Over Night Delivery
    
    </li>
    <li> <img src={ DOOR2DOOR } />
    Messengerial Services
    </li>
    <li> <img src={ INTER } />
    International Courier Services
    </li>
    </ul>




    </div>
)

export default ServiceBar;