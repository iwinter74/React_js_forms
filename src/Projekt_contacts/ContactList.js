import React, { Component } from 'react';
import Contact from './Contact';
import contactDataFull from './contactDataFull';
console.log(contactDataFull)

class ContactList extends Component {
    state = { 
        contact: contactDataFull.slice(),
        newArray: contactDataFull.slice(0,5),
    }
    
    randomContact = () => {
        console.log(this.state.contact.length)
        const randomNumber = Math.floor((Math.random() * this.state.contact.length));
        console.log(randomNumber)
        const newA = this.state.newArray
        newA.push(this.state.contact[randomNumber])
        this.setState({ newArray: newA });
    }

    sortName = () => {
        const newData = this.state.newArray.sort((a, b) => {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            else if (nameA > nameB) {
              return 1;
            }
          else { return 0;}
        
           
        });
        this.setState({ newArray: newData });
        console.log(this.state.newArray)
    }
    sortPopularity = () => {
        const newData = this.state.newArray.sort((a, b) => {
            return a.popularity - b.popularity
        })
        this.setState({ newArray: newData });
        console.log(this.state.newArray)

    }
    // deleteContact = (index) => {
    //     const newA = this.state.newArray
    //     newA.splice(index,1)
    //     this.setState({ newArray: newA });
    //     console.log(index)
    // }

    render() { 
        return ( 
            <main>
                <input type="button" value="Add Random Contact" onClick={this.randomContact} />
                <input type="button" value="Sort by name" onClick={this.sortName}/>
                <input type="button" value="Sort by popularity" onClick={this.sortPopularity}/>
            <section>
                {this.state.newArray.map((contact, i) =>
                <div>
                <Contact
                    key={i}
                    pictureUrl={contact.pictureUrl}
                    name={contact.name}
                    popularity={contact.popularity.toFixed(2)}
                    // deleteContact={this.deleteContact(i)}
                            
                />

            </div>
           )}
                </section>
            </main>


         );
    }
}
 
export default ContactList;

