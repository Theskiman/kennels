import React, { Component } from 'react'
import EmployeeList from "./employee/employeeList"  // Import EmployeeList component
import LocationList from "./locations/locationList"

export default class Kennel extends Component {
    render() {
        return (
            <div>
                <LocationList />
                <EmployeeList />
            </div>
        );
    }
}

