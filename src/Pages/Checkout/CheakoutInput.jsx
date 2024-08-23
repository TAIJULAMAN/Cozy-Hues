/* eslint-disable react/prop-types */

const CheakoutInput = ({
    label,
    type = 'text',
    name,
    placeholder,
    value,
    onChange,
    required = false,
    additionalClasses = '',
  }) => {
  return (
    <div className="relative">
    <label htmlFor={name} className="text-gray-800">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`px-4 py-3 mt-1 bg-gray-100 focus:bg-white text-gray-800 w-full text-sm rounded-md focus:outline-blue-600 ${additionalClasses}`}
    />
  </div>
  )
}

export default CheakoutInput