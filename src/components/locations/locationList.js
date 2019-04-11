import React, { Component } from 'react'

export default class locationList extends Component {
    render() {
        return (
           <React.Fragment> 
            <div>
                <h3>Student Kennels One</h3>
                <h4>Nashville North Location</h4>
                <h5>500 Puppy Way</h5>
            </div>
            <div>
                <h3>Student Kennels Two</h3>
                <h4>Nashville South Location</h4>
                <h5>999 Cat Alley</h5>
            </div>
            </React.Fragment>
        );
    }
}