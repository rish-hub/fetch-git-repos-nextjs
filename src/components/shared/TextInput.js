import React from "react";

const TextInput = ({ value, label, onChange, placeholder }) => {
  return (
    <div>
      {label}
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
