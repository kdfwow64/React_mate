import React from 'react';
import HelperText from './style';

export default ({
  text = '',
  width = '100%',
  padding = '80px 0',
  display = 'flex',
  alignItems = 'center',
  justifyContent = 'center',
  className = 'helperText',
}) => (
  <HelperText
    className={className}
    style={{ width, padding, display, alignItems, justifyContent }}
  >
    <h3>{text}</h3>
  </HelperText>
);
