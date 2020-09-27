import React from "react";

const TextInput = ({ value, label, onChange, placeholder, className }) => {
  const textInputClass = className ? `${className} field` : "field";
  return (
    <div className={textInputClass}>
      <div className="control">
        <label className="label">{label}</label>
        <input
          className="input is-primary"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TextInput;
