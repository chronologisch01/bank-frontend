import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import CreateAccount from './components/CreateAccount';
import Transfer from './components/Transfer';
import AccountsOverview from './components/AccountsOverview';

function App() {
  const [accounts, setAccounts] = useState([]);
  const [accountId, setAccountId] = useState('');
  const [depositAccountId, setDepositAccountId] = useState('');
  const [depositAmount, setDepositAmount] = useState('');
  const [fromAccountId, setFromAccountId] = useState('');
  const [toAccountId, setToAccountId] = useState('');
  const [transferAmount, setTransferAmount] = useState('');

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = () => {
    axios.get('http://localhost:8080/accounts')
      .then(response => setAccounts(response.data))
      .catch(error => console.error(error));
  };

  const createAccount = () => {
    console.log("method called");
    axios.post(`http://localhost:8080/accounts/create/${accountId}`)
      .then(() => {
        console.log("inside");
        fetchAccounts();
        setAccountId('');
      })
      .catch(error => console.error(error));

  };

  const deposit = () => {
    axios.post(`http://localhost:8080/accounts/${depositAccountId}/deposit`, null, {
      params: {
        amount: parseFloat(depositAmount),
      }
    }).then(() => {
      fetchAccounts();
      setDepositAccountId('')
      setDepositAmount('');
    }).catch(error => console.error(error));
  };

  const withdraw = () => {
    axios.post(`http://localhost:8080/accounts/${depositAccountId}/withdraw`, null, {
      params: {
        amount: parseFloat(depositAmount),
      }
    }).then(() => {
      fetchAccounts();
      setDepositAccountId('')
      setDepositAmount('');
    }).catch(error => console.error(error));
  };

  const transfer = () => {
    axios.post(`http://localhost:8080/accounts/${fromAccountId}/transfer`, null, {
      params: {
        toAccountId: toAccountId,
        amount: parseFloat(transferAmount),
      }
    }).then(() => {
      fetchAccounts();
      setFromAccountId('');
      setToAccountId('');
      setTransferAmount('');
    }).catch(error => console.error(error));
  };



  return (
    <div className="d-flex justify-content-center my-5">
      <div className="col-md-8 col-lg-6">
        <div className="text-center mb-5">
          <h1 className="text-primary">Fast & Reckless Bank</h1>
        </div>
                
        <CreateAccount accountId={accountId} setAccountId={setAccountId} createAccount={createAccount} />

        <div className="card p-4 mb-4">
          <h2 className='text-primary'>Deposit / Withdraw</h2>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Account ID"
              value={depositAccountId}
              onChange={e => setDepositAccountId(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Amount"
              value={depositAmount}
              onChange={e => setDepositAmount(e.target.value)}
            />
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-primary w-50"
            onClick={deposit}
            >Deposit</button>
            <button className="btn btn-outline-primary w-50"
            onClick={withdraw}
            >Withdraw</button>
          </div>
        </div>

        <Transfer fromAccountId={fromAccountId} setFromAccountId={setFromAccountId} toAccountId={toAccountId} setToAccountId={setToAccountId} transferAmount={transferAmount} setTransferAmount={setTransferAmount} transfer={transfer} />
        <AccountsOverview accounts={accounts} />
      
      </div>
    </div>
  );
}


export default App;
