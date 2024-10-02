import React from 'react';
import css from './css/NavBarForm.module.css';

const NavBarChild = ({ handleClick }) => {
  return (
    <form className={css.NavBarChild}>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </form>
  );
};

export default NavBarChild;
