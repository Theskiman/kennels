import React, { Component } from 'react'


export default class AnimalList extends Component {
    render() {
        return (
            <article>
                <h1>Animal List</h1>
                {
                this.props.animals.map(animal =>
                    <div key={animal.id}>
                        {`${animal.name}
                     Mythical:  ${animal.Mythical}`}
                    </div>
                )
            }
 
            </article>
        );
    }
}