import React, { Component } from 'react';


class Contact extends Component {
    state = {  }
    render() { 
        return (
            <main>
        <section className="actors-display">
            <h1>Picture</h1>
            <h1>Name</h1>
            <h1>Popularity</h1>
            <h1>Action</h1>
        </section>
        <section className="actors-display">
            <img className="actors-img" src={this.props.pictureUrl} alt="" />
            <h1>{this.props.name}</h1>
            <p>{this.props.popularity}</p>
            {/* <input type="button" value="Delete" onClick={this.props.deleteContact}/> */}
            </section>
        </main>

          );
    }
}
 

export default Contact;