export const Dropdown = ({
  placeholder,
  options,
  defaultValue,
  containerStyles,
  name,
  onChange,
}) => {
  return (
    <div className={containerStyles}>
      <select
        defaultValue={defaultValue}
        className="w-full bg-white border border-gray-300 rounded-md p-4 cursor-pointer"
        name={name}
        onChange={onChange}
      >
        <option disabled>{placeholder}</option>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </div>
  );
};
