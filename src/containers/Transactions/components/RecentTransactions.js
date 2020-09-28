import React from 'react';

import styles from '../styles/recentTransactions.module.scss';
import formatCurrency, { formateNumber } from '../../../libs/format';
import { ReactComponent as IncreamentIcon } from '../images/increament.svg';
import { ReactComponent as DecrementIcon } from '../images/decrement.svg';

const transactions = [
  {
    id: 'transactions-1',
    amount: 250.03,
    incomeType: 'increment',
    income: 12.5,
  },
  {
    id: 'transactions-2',
    amount: 250.04,
    incomeType: 'increment',
    income: 12.5,
  },
  {
    id: 'transactions-3',
    amount: 250.05,
    incomeType: 'increment',
    income: 10.5,
  },
  {
    id: 'transactions-4',
    amount: 250.06,
    incomeType: 'increment',
    income: 6.5,
  },
  {
    id: 'transactions-5',
    amount: 250.07,
    incomeType: 'decrement',
    income: 4.5,
  },
  {
    id: 'transactions-6',
    amount: 250.08,
    incomeType: 'decrement',
    income: 2.5,
  },
  {
    id: 'transactions-7',
    amount: 250.09,
    incomeType: 'decrement',
    income: 2.5,
  },
];

const dropDownBank = [
  {
    id: 'drop-1',
    value: 'bank',
    text: 'bank',
  },
  {
    id: 'drop-2',
    value: 'access',
    text: 'access',
  },
  {
    id: 'drop-3',
    value: 'uba',
    text: 'UBA',
  },
];

const dropDownIncome = [
  {
    id: 'income-1',
    value: 'income',
    text: 'income',
  },
  {
    id: 'income-2',
    value: 'access',
    text: 'access',
  },
  {
    id: 'income-3',
    value: 'uba',
    text: 'UBA',
  },
];

const RecentTransactions = () => {
  return (
    <section className={styles.container}>
      <table className={styles.containerTable}>
        <thead
          className={`${styles.containerTableRow} ${styles.containerTableRowWithoutBorder} ${styles.containerTableRowHeader}`}
        >
          <tr className={`${styles.bigText} ${styles.sectionsTitle}`}> {formatCurrency(28941.69)} </tr>
          <tr className={styles.containerTableRowIncome}>
            <td className={styles.subText}> +1.01% </td>
            <td>
              <IncreamentIcon />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr
            className={`${styles.containerTableRow} ${styles.containerTableRowWithoutBorder} ${styles.containerTableRowDropDownContainer}`}
          >
            <td className={styles.containerTableRowSelect}>
              <select name='bank' id='bank' className={styles.containerTableRowSelectField}>
                {dropDownBank.map(({ value, id, text }) => {
                  return (
                    <option value={value} key={id}>
                      {text}
                    </option>
                  );
                })}
                }
              </select>
            </td>
            <td className={styles.containerTableRowSelect}>
              <select name='income' id='income' className={styles.containerTableRowSelectField}>
                {/* <option value='income'> income </option> */}
                {dropDownIncome.map(({ value, id, text }) => {
                  return (
                    <option value={value} key={id}>
                      {text}
                    </option>
                  );
                })}
              </select>
            </td>
          </tr>
          {transactions.map(({ id, income, amount, incomeType }) => {
            const isIncrement = incomeType === 'increment';
            return (
              <tr className={styles.containerTableRow} key={id}>
                <td className={styles.subText}>NP {formateNumber(amount, 2)}</td>
                <td className={styles.containerTableRowIncome}>
                  <span
                    className={`${styles.subText} ${
                      isIncrement
                        ? styles.containerTableRowIncomeIncrement
                        : styles.containerTableRowIncomeDecrement
                    } `}
                  >
                    {isIncrement ? '+' : '-'}
                    {formateNumber(income, 1)}%
                  </span>
                  {isIncrement ? <IncreamentIcon /> : <DecrementIcon />}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default RecentTransactions;
