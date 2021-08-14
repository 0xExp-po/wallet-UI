const Input = (props) => {
  const {
    onChange,
    type = 'text',
    placeholder,
    value,
    name
  } = props;
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      name={name}
      className="form-control"
      placeholder={placeholder}
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  );
}

export default Input;
