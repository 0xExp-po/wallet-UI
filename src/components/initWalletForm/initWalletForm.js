import { useState } from 'react';
import { Input } from '../input';
import { Button } from '../button';
import './walletForm.style.css';

const WalletForm = (props) => {
  const [walletName, setWalletName] = useState('');
  const [balance, setBalance] = useState('');
  const { initWallet } = props;
  const onSubmit = () => {
    initWallet(walletName, Number(balance));
  }
  return (
    <div className="container">
      <div className="row justify-content-md-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-md">
          <div className="card text-dark bg-light mb-3">
            <div className="card-header">Create New Wallet</div>
            <form className="wallet-form">
              <div className="mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Wallet Name</label>
                <div className="col-sm-10">
                  <Input name='walletName' placeholder='Wallet Name' value={walletName} onChange={(name, value) => setWalletName(value)} />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Initial Balance</label>
                <div className="col-sm-10">
                <Input name='balance' placeholder='Balance' value={balance} onChange={(name, value) => setBalance(value)} />
                </div>
              </div>
              <Button name='Create Wallet' onSubmit={onSubmit} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WalletForm;
