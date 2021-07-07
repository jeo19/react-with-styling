import React from 'react';

function CheckBox({ children, checked, ...rest }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        <div>{checked ? 'checked' : 'unchecked'}</div>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default CheckBox;
