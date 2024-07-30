import React, { useState } from 'react';

function MyCheckbox({ defaultChecked = false, onClick }) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = () => {
    setChecked(prevChecked => !prevChecked);
  };

  return (
    <div onClick={onClick}>
      <div className={checked ? 'checked' : 'unchecked'}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default MyCheckbox;
