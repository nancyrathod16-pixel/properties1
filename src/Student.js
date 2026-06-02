import React from 'react';
import PropTypes from 'prop-types';

export default function Student(props) {
  return (
    <div>
      <h1>Student Name : {props.Name}</h1>
      <h1>Age : {props.Age}</h1>
    </div>
  );
}

Student.propTypes = {
  Name: PropTypes.string,
  Age: PropTypes.number,
};
