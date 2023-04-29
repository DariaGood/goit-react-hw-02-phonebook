import React from 'react';
import styles from './filter.module.css';
const Filter = props => {
  const { filter, onInputValue } = props;

  return (
    <div>
      <p>Find contacts by name</p>
      <input className={styles.inputFilter} value={filter} onChange={onInputValue}></input>
    </div>
  );
};

export default Filter;
