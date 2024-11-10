import React from 'react';

function Transfer({ fromAccountId, setFromAccountId, toAccountId, setToAccountId, transferAmount, setTransferAmount, transfer }) {
  return (
    <div className="card p-4 mb-4">
      <h2 className="text-primary">Transfer</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="From Account ID"
          value={fromAccountId}
          onChange={e => setFromAccountId(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="To Account ID"
          value={toAccountId}
          onChange={e => setToAccountId(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Amount"
          value={transferAmount}
          onChange={e => setTransferAmount(e.target.value)}
        />
      </div>
      <button className="btn btn-primary w-100" onClick={transfer}>
        Transfer
      </button>
    </div>
  );
}

export default Transfer;