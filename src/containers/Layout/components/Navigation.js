import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../styles/navigation.module.scss';
import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as DashboardIcon } from '../images/dashboard.svg';
import { ReactComponent as MessageIcon } from '../images/message.svg';
import { ReactComponent as TransactionIcon } from '../images/assessment.svg';
import { ReactComponent as ExchageIcon } from '../images/exchange.svg';
import { ReactComponent as WithdrawIcon } from '../images/withdraw.svg';
import { ReactComponent as DepositIcon } from '../images/deposit.svg';
import { ReactComponent as SecurityIcon } from '../images/security.svg';
import {
  dashboard,
  deposit,
  exchanges,
  mesage,
  security,
  transactions,
  withdraw,
} from '../../../utils/routes';

const navigationLinks = [
  {
    id: 'nav-1',
    icon: DashboardIcon,
    text: 'Dashboard',
    path: dashboard,
  },
  {
    id: 'nav-2',
    icon: MessageIcon,
    text: 'Message',
    path: mesage,
  },
  {
    id: 'nav-3',
    icon: TransactionIcon,
    text: 'Transaction',
    path: transactions,
  },
  {
    id: 'nav-4',
    icon: ExchageIcon,
    text: 'Exchanges',
    path: exchanges,
  },
  {
    id: 'nav-5',
    icon: WithdrawIcon,
    text: 'Withdraw',
    path: withdraw,
  },
  {
    id: 'nav-6',
    icon: DepositIcon,
    text: 'Deposit',
    path: deposit,
  },
  {
    id: 'nav-7',
    icon: SecurityIcon,
    text: 'Security',
    path: security,
  },
];

const Navigation = () => {
  return (
    <nav className={styles.container}>
      <NavLink className={styles.containerLinks} to={'/'}>
        <Logo className={styles.containerLinksIconsLogo} />
        <span className={styles.mainText}> Connect </span>
      </NavLink>
      <div className={styles.containerSubsection}>
        {navigationLinks.map(({ id, icon: Icon, text, path }) => {
          return (
            <NavLink
              key={id}
              className={styles.containerLinks}
              to={path}
              activeClassName={styles.containerLinksActive}
            >
              <Icon className={styles.containerLinksIcons} />
              <span className={styles.mainText}>{text}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
