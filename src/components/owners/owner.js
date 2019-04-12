import React, { Component } from 'react'

export default class ownerList extends Component {
    render() {
        return (
           <React.Fragment> 
            <div className="content">
                <h1>Owners</h1>
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id}>
                        {owner.name} {owner.phoneNumber}
                        </div>
                        )
                }   
            </div>
            </React.Fragment>
        );
    }
}