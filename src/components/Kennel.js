import React, { Component } from 'react'
import "./Kennel.css"
import ApplicationViews from "./ApplicationViews"
import NavBar from "./nav/NavBar"



    export default class Kennel extends Component {

        /*
            Although you will eventually be pulling your objects
            from your json-server API, for this chapter, we're
            faking it and just creating those arrays in the component
            itself
        */
     
    
        

    render() {
        return (
            <React.Fragment>
            <NavBar />
            <ApplicationViews />
        </React.Fragment>
        );
    }
}

