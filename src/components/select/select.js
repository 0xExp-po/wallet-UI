const Select = (props) => {
  const { options, onChange, selected } = props;
  return (
    <select onChange={onChange} value={selected} className="form-select" aria-label="Default select example">
      {options?.map((op) => (
        <option
          key={op.label}
          value={op.value}
        >
          {op.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
