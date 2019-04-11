import React, { Component } from 'react'

export default class locationList extends Component {
    render() {
        return (
           <React.Fragment> 
            <div>
                <h1>Locations</h1>
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                        {location.name}
                        </div>
                        )
                }
            </div>
            </React.Fragment>
        );
    }
}