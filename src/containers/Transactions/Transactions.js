import React from 'react';
import ActiveCards from './components/ActiveCards';
import Map from './components/Map';

import RecentTransactions from './components/RecentTransactions';
import SubRecentTransactions from './components/SubRecentTransactions';

import TransactionsHeader from './components/TransactionsHeader';
import TransactionSummary from './components/TransactionSummary';
import UsersTransactions from './components/UsersTransactions';
import styles from './styles/index.module.scss';

const Transactions = () => {
  return (
    <>
      <TransactionsHeader />
      <div className={styles.container}>
        <RecentTransactions />
        <TransactionSummary />
        <UsersTransactions />
        <SubRecentTransactions />
        <ActiveCards />
        <Map />
      </div>
    </>
  );
};

export default Transactions;
