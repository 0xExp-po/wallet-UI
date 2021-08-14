import { useState } from 'react';
import { Input } from '../input';
import { Select } from '../select';
import { Button } from '../button';

import { startTransactions } from '../../utils/request';

const options = [{ label: 'select type', value: '' }, { label: 'CREDIT', value: 'CREDIT' }, { label: 'DEBIT', value: 'DEBIT' }];

const WalletTransactionForm = ({ fetchWalletDetails }) => {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const onSubmit = () => {
    const walletId = localStorage.getItem('walletId');
    const val = type === 'CREDIT' ? amount : -amount;
    startTransactions(walletId, { amount: Number(val), description: type })
      .then((res) => {
        console.log(res);
        fetchWalletDetails();
      }).catch(err => {
        console.log(err);
      });
  }
  return (
    <div className="card text-dark bg-light mb-3">
      <div className="card-header">Create New Wallet</div>
      <form className="wallet-form">
        <div className="mb-3">
          <label htmlFor="amount" className="col-sm-2 col-form-label">Amount</label>
          <div className="col-sm-10">
          <Input name='amount' placeholder='Amount' value={amount} onChange={(name, value) => setAmount(value)} />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="col-sm-2 col-form-label">Type</label>
          <div className="col-sm-10">
          <Select options={options} selected={type} onChange={(e) => setType(e.target.value)} />
          </div>
        </div>
        <Button name='Submit' onSubmit={onSubmit} />
      </form>
    </div>
  );
}

export default WalletTransactionForm;
