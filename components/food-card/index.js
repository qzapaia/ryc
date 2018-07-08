import React from 'react';
import PropTypes from 'prop-types';

const Comp = ({
  title,
  addressstr
}) => (
  <div>
    <h2>
      {title}     
    </h2>
    <h3>
      {addressstr}
    </h3>
    <span>Podés pedir hasta las 11:00</span>
  </div>
);

Comp.propTypes = {
  
};

export default Comp;