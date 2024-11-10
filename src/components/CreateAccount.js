import React from 'react';

function CreateAccount({ accountId, setAccountId, createAccount }) {
  return (
    <div className="card p-4 mb-4">
      <h2 className="text-primary">Create Account</h2>
      <div className='mb-3'>
        <input
          type="text"
          className='form-control'
          placeholder="Account ID"
          value={accountId}
          onChange={e => setAccountId(e.target.value)}
        />
      </div>
      <button className="btn btn-primary w-100" onClick={createAccount}>
        Create Account
      </button>
    </div>
  );
}

export default CreateAccount;