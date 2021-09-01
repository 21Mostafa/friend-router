import React from 'react';
import { useEffect, useState } from 'react';
import Friend from './../Friend/Friend';

 

const Home = () => {
    const [friend, setFriend] = useState([])

    

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => 
        setFriend(data))
        

    },[])


    return (
        <div>
             <h1>Friends: {friend.length}</h1>

{friend.map(ok => <Friend friend ={ok}> </Friend>)}
        </div>
    );
};

export default Home;