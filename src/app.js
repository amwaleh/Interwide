import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MenuBar from './components/menu';
import Services from './components/services';
import About from './components/about';
import Contacts from './components/Contacts';
import ContainerBody from './components/index';
import "font-awesome/css/font-awesome.min.css";
import { Grid } from 'semantic-ui-react';
import Favicon from 'react-favicon'


const App = ()=>(
    <Router>
    <Grid.Row>
   <Grid.Column>
    <Favicon url={[require('Assets/logo-small.png')]}/>

    <MenuBar />
    <Route exact path="/" component={ContainerBody}/>
    <Route  path="/home" component={ContainerBody}/>
    <Route path="/services" component={Services}/>
    <Route path="/about" component={About}/>
    <Route path="/contacts" component={Contacts}/>
    </Grid.Column>
    </Grid.Row>

    </Router>

) 
ReactDOM.render(<App />, document.getElementById('app'))

