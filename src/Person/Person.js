import React from 'react';
import './Person.css'


const Person = (props) => {

  return (
    <div className="Person">
      {
        props.click &&
        (<button onClick={props.click}>Switch Name</button>)
      }
      <p> I'm {props.name} and I am {props.age} years old </p>
      <p> {props.children} </p>
      <input type="text" onChange={props.change} placeholder={props.name} />
    </div>
  );
};

export default Person;
