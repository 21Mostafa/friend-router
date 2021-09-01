import React, { useEffect, useState } from 'react';
 
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();

    const[friend,setFriend] = useState([])

    useEffect (() => {
         
        fetch( `https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(response => response.json())
        .then(data => setFriend(data) )
    },[])

    return (

        <div>
            <p>This is Friend Level   Component {friendId}</p>
            <h3>{friend.name}</h3>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
            <p>Website: <a href={friend.website}> {friend.website}</a>  </p>
        </div>
    );
};

export default FriendDetail;