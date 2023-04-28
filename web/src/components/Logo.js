import React from 'react';
import { GrTechnology } from 'react-icons/gr';
import LogoStyles from '../styles/LogoStyles';

function Logo() {
  return (
    <div>
      <LogoStyles to="/">
        <GrTechnology />
      </LogoStyles>
    </div>
  );
}

export default Logo;
