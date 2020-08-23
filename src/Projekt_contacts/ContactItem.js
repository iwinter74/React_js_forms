import React from 'react';

const ContactItem = (props) => {
    return (<tr>
        <td><img src={props.contactArr.pictureUrl} alt="" /></td>
        <td>{props.contactArr.name}</td>
        <td>{props.contactArr.popularity.toFixed(2)}</td>
        <td><button onClick={() => props.deleteContact(props.contactArr.popularity)}>delete</button></td>
    </tr>);
}

export default ContactItem;