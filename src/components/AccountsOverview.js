import React from 'react';

function AccountsOverview({ accounts }) {
  return (
    <div className="card p-4">
      <h2 className="text-primary">Accounts Overview</h2>
      <table className="table table-striped">
        <thead className="table-primary">
          <tr>
            <th>Account ID</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map(account => (
            <tr key={account.accountId}>
              <td>{account.accountId}</td>
              <td>{account.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AccountsOverview;