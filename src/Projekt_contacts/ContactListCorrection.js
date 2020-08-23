import React, { Component } from 'react';
import contacts from './contacts.json'
import ContactItem from './ContactItem';
console.log(contacts)
class ContactListCorrection extends Component {
    state = {
        contactArr: contacts.slice(0, 5),

        randomArr: contacts.slice(5),
        fromAtoZ: true,
    }
    addRandom = () => {
        let random = Math.floor(Math.random() * this.state.randomArr.length)
        console.log(random)
        let newArr = this.state.contactArr.slice()
        console.log(newArr)
        newArr.push(this.state.randomArr[random])
        let newRandomArr = this.state.randomArr.slice()
        newRandomArr.splice(random, 1)
        this.setState({ randomArr: newRandomArr });
        this.setState({ contactArr: newArr });
    }
    handleSort = () => {
        if (this.state.fromAtoZ) {
            const newArr = this.state.contactArr.slice()
            newArr.sort((elt1, elt2) => {
                let a = elt1.name.toUpperCase()
                let b = elt2.name.toUpperCase()
                if (a < b) {
                    return 1
                } else if (a > b) {
                    return -1
                } else {
                    return 0
                }
            })
            this.setState({ contactArr: newArr });
            this.setState({ fromAtoZ: !this.state.fromAtoZ });
        } else {
            const newArr = this.state.contactArr.slice()
            newArr.sort((elt1, elt2) => {
                let a = elt1.name.toUpperCase()
                let b = elt2.name.toUpperCase()
                if (a < b) {
                    return -1
                } else if (a > b) {
                    return 1
                } else {
                    return 0
                }
            })
            this.setState({ contactArr: newArr });
            this.setState({ fromAtoZ: !this.state.fromAtoZ });
        }
    }
    deleteContact = (popularity) => {
        console.log(popularity)
        const newArr = this.state.contactArr.filter(elt => elt.popularity !== popularity)
        this.setState({ contactArr: newArr });
    }
    render() {
        return (<section>
            <button onClick={this.addRandom}>Add Random</button>
            <button onClick={this.handleSort}>Sort By name</button>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.contactArr.map((elt, i) => <ContactItem
                        contactArr={elt}
                        key={i}
                        deleteContact={this.deleteContact}
                    />)
                    }
                </tbody>
            </table>
        </section>);
    }
}

export default ContactListCorrection;
