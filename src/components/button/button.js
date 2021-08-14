const Button = (props) => {
  const { name, onSubmit } = props;
  return (
    <button
      onClick={onSubmit}
      type="button"
      className="btn btn-secondary"
    >
      {name}
    </button>
  );
}

export default Button;
