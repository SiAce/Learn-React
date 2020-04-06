import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 800px) {
    width: 500px;
  }
`;

const Person = (props) => {

  return (
    <StyledDiv className="Person">
      {
        props.click &&
        (<button onClick={props.click}>Switch Name</button>)
      }
      <p> I'm {props.name} and I am {props.age} years old </p>
      <p> {props.children} </p>
      <input type="text" onChange={props.change} placeholder={props.name} />
    </StyledDiv>
  );
};

export default Person;
