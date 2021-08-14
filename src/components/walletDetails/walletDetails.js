const WalletDetails = (props) => {
  const { balance, name } = props;
  return (
    <div className="card" style={{ marginBottom: '2rem' }}>
      <div className="card-header">
        Wallet Details
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Name : {name}
        </li>
        <li className="list-group-item">
          Balance : {balance}
        </li>
      </ul>
    </div>
  );
}

export default WalletDetails;
