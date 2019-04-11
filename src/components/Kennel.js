import React, { Component } from 'react'
import EmployeeList from "./employee/employeeList"  // Import EmployeeList component
import LocationList from "./locations/locationList"
import "./Kennel.css"

    export default class Kennel extends Component {

        /*
            Although you will eventually be pulling your objects
            from your json-server API, for this chapter, we're
            faking it and just creating those arrays in the component
            itself
        */
        employeesFromAPI = [
            { id: 1, name: "Jessica Jones" },
            { id: 2, name: "Jordan Nelson" },
            { id: 3, name: "Zoe LeBlanc" },
            { id: 4, name: "Blaise Roberts" }
        ]
    
        // This will eventually get pulled from the API
        locationsFromAPI = [
            { id: 1, name: "Nashville North", address: "500 Circle Way" },
            { id: 2, name: "Nashville South", address: "10101 Binary Court" }
        ]
    
        state = {
            employees: this.employeesFromAPI,
            locations: this.locationsFromAPI
        }


    render() {
        return (
            <div>
                <LocationList locations={this.state.locations}/>
                <EmployeeList employees={this.state.employees}/>
            </div>
        );
    }
}

