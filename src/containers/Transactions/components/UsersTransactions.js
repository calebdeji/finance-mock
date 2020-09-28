import React from 'react';

import formatCurrency from '../../../libs/format';
import styles from '../styles/usersTransactions.module.scss';

const usersTransactionsData = [
  {
    id: 'user-1',
    name: 'Randy Westervelt',
    amount: 15025.1,
    image: require('../images/user_1.png'),
  },
  {
    id: 'user-2',
    name: 'Alfredo Levin',
    amount: 12056.75,
    image: require('../images/user_2.png'),
  },
  {
    id: 'user-3',
    name: 'Adison Gouse',
    amount: 11084.25,
    image: require('../images/user_3.png'),
  },
  {
    id: 'user-4',
    name: 'Jaxson Fracci',
    amount: 10090.55,
    image: require('../images/user_4.png'),
  },
  {
    id: 'user-5',
    name: 'Edwards Steve',
    amount: 8094.68,
    image: require('../images/user_5.png'),
  },
];

const allTimeDropdown = [
  { id: 'all-time-1', value: 'All Time' },
  { id: 'all-time-2', value: 'Some Times' },
];

const nepalDropDown = [
  { id: 'nepal-1', value: 'Nepal' },
  { id: 'nepal-2', value: 'Panel' },
];
const UsersTransactions = () => {
  return (
    <section className={styles.container}>
      <header>
        <h2 className={`${styles.bigText} ${styles.sectionsTitle}`}> Users </h2>
      </header>
      <form className={styles.containerDropdownSection}>
        <div className={styles.containerDropdownSectionSelect}>
          <select name='time-drop' id='time-drop' className={styles.containerDropdownSectionSelectField}>
            {allTimeDropdown.map(({ id, value }) => {
              return (
                <option value={value} key={id}>
                  {' '}
                  {value}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.containerDropdownSectionSelect}>
          <select name='nepal-drop' id='nepal-drop' className={styles.containerDropdownSectionSelectField}>
            {nepalDropDown.map(({ id, value }) => {
              return (
                <option value={value} key={id}>
                  {' '}
                  {value}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <div className={styles.containerTransactions}>
        {usersTransactionsData.map(({ name, image, id, amount }) => {
          return (
            <div className={styles.containerTransactionsSection} key={id}>
              <img src={image} alt={name} className={styles.containerTransactionsSectionImage} />
              <span className={`${styles.containerTransactionsSectionName} ${styles.subText}`}> {name} </span>
              <span className={`${styles.containerTransactionsSectionWorth} ${styles.tinyText}`}>
                {' '}
                {formatCurrency(amount)}{' '}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UsersTransactions;
