import React from "react";
import PropTypes from "prop-types";

const InputField = ({ value, onChange, text, fieldName, meta }) => {
  console.log("meta", meta);
  return (
    <div>
      <div className="input-field">
        <label htmlFor={fieldName} className="input-field__label">
          {text}
          <input value={value} onChange={onChange} />
        </label>
      </div>
    </div>
  );
};

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired
};

export default InputField;
