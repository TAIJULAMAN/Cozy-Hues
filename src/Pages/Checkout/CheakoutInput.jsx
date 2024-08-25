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
    <label htmlFor={name} className="text-white">
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
      className={`px-4 py-3 font-medium text-xl mt-1 bg-[#365e61] focus:bg-[#e8f0fe] text-white focus:text-black w-full  rounded-md focus:outline-blue-600 ${additionalClasses}`}
    />
  </div>
  )
}

export default CheakoutInput