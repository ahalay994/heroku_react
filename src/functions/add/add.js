import React from 'react'
import firebase from "../../config/firebase";

const Add = (id, name, chanel) => {
    let postData = {
        id: id,
        name: name,
        chanel: chanel
    };


    let newPostKey = firebase.database().ref().child('list').push().key;
    let updates = {};
    updates['/list/' + newPostKey] = postData;
    firebase.database().ref().update(updates);
};

export default Add;