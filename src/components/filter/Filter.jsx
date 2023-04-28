import React from 'react';

const Filter = props => {
  const { filter, onInputValue } = props;

  return (
    <div>
      <p>Find contacts by name</p>
      <input value={filter} onChange={onInputValue}></input>
    </div>
  );
};

export default Filter;
