import React, { Component } from 'react'
import EmployeeList from "./employee/employeeList"  // Import EmployeeList component
import LocationList from "./locations/locationList"
import AnimalList from "./animals/animals"
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

        animalsFromApi = [
            { id: 1, name: "Liger", Mythical: "false"},
            { id: 2, name: "Manticore", Mythical: "true"},
            { id: 3, name: "Wyvern", Mythical: "true"}
        ]
    
        state = {
            employees: this.employeesFromAPI,
            locations: this.locationsFromAPI,
            animals: this.animalsFromApi
        }


    render() {
        return (
            <div className = "kennel">
                <LocationList locations={this.state.locations}/>
                <EmployeeList employees={this.state.employees}/>
                <AnimalList animals={this.state.animals}/>
            </div>
        );
    }
}

