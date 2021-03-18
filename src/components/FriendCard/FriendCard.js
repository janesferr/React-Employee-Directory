import React from "react";
import "./FriendCard.css";


const FriendCard = props => (
  
    <tr>
       <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td> <img alt={props.name} src={props.image} /> </td>
    </tr>
     
);


 


export default FriendCard;
