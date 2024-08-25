/* eslint-disable react/prop-types */
const ChekRadio = ({ id, name, value, label, onChange, checked }) => {
    return (
      <div className="flex items-center">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className={`mr-2 form-radio text-blue-600  ${
            checked ? " ring-blue-600" : ""
          }`}
        />
        <label
          htmlFor={id}
          className={`text-white ${checked ? "text-blue-600 font-semibold" : ""}`}
        >
          {label}
        </label>
      </div>
    );
  };
  
  export default ChekRadio;
  