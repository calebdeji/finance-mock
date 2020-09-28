import React from 'react';

import styles from '../styles/transactionHeader.module.scss';
import { ReactComponent as NotificationIcons } from '../images/notifications.svg';
import { ReactComponent as MenuIcon } from '../images/icon.svg';
import { ReactComponent as SearchIcon } from '../images/search.svg';
import { ReactComponent as CalendarIcon } from '../images/calendar.svg';
import { ReactComponent as DateDropDownIcon } from '../images/dateDropDown.svg';

const TransactionsHeader = () => {
  return (
    <header className={styles.container}>
      <form action='' className={styles.containerForm}>
        <label htmlFor='search' hidden>
          {' '}
          Search
        </label>
        <SearchIcon />
        <input
          type='search'
          name='search'
          id='search'
          className={styles.containerFormInput}
          placeholder='Search'
        />
      </form>
      <div className={styles.containerDate}>
        <label htmlFor='date' hidden>
          {' '}
          Date
        </label>
        <CalendarIcon />
        <input type='date' name='' id='' className={styles.containerDateInput} />
        <DateDropDownIcon />
      </div>
      <div className={styles.containerMeta}>
        <NotificationIcons className={styles.containerMetaNotification} />
        <section className={styles.containerMetaUser}>
          <p className={styles.containerMetaUserName}> Jon Camp</p>
          <img src={require('../images/user.png')} alt='Jon Camp' className={styles.containerMetaUserImage} />
          <MenuIcon />
        </section>
      </div>
    </header>
  );
};

export default TransactionsHeader;
