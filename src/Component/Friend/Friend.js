
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
 
 
 

const Friend = (props) => {
  console.log(props);

    const {name,email,id} = props.friend;
    

    const history = useHistory();
    const handelClick = (friendId) => {
        history.push(`/friend/${friendId}`);
    }

    const style ={
        border: '1px solid blue',
        margin:"10px",
        padding:"10px",
        borderRadius:"20px"
    }
    return (
        <div style={style}>
        
              
           <h4>  Name:  { name} </h4> 
            <p> Email:    {email}</p>   
              
    Id:     <Link to={  `/friend/${id}`}>  Show Detail of: {id}  </Link> 
    <br /><br />

             <button className="btn btn-success"onClick={() =>handelClick(id)}>Click Me</button>
            
            
              
        
    

        </div>
    );
};

export default Friend;