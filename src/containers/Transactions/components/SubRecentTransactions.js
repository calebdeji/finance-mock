import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

import formatCurrency, { formateNumber } from '../../../libs/format';
import styles from '../styles/subRecentTransactions.module.scss';

const data = [
  {
    id: 'trans-1',
    bank: 250.04,
    amount: 45682.01,
    rangeData: [
      {
        amt: 2400,
      },
      {
        amt: 5010,
      },
      {
        amt: 1290,
      },
      {
        amt: 7090,
      },
      {
        amt: 12000,
      },
    ],
  },
  {
    id: 'trans-2',
    bank: 250.07,
    amount: 4562.01,
    rangeData: [
      {
        amt: 2000,
      },
      {
        amt: 3010,
      },
      {
        amt: 5090,
      },
      {
        amt: 9090,
      },
      {
        amt: 7000,
      },
    ],
  },
  {
    id: 'trans-3',
    bank: 250.09,
    amount: -1562.01,
    rangeData: [
      {
        amt: 1000,
      },
      {
        amt: 2001,
      },
      {
        amt: 1290,
      },
      {
        amt: 3090,
      },
      {
        amt: 2000,
      },
    ],
  },
];

const generateGradient = (index) => {
  if (index === 2) {
    return { gradient: 'yellow', stroke: '#F9A000' };
  } else if (index === 1) {
    return { gradient: 'red', stroke: '#fd3758' };
  } else if (index === 0) {
    return { gradient: 'green', stroke: '#02c39a' };
  }
};

const SubRecentTransactions = () => {
  return (
    <section className={styles.container}>
      {data.map(({ bank, id, amount, rangeData }, index) => {
        return (
          <div className={styles.containerTransaction} key={id}>
            <div className={styles.containerTransactionNumbers}>
              <span className={styles.subText}>NP {formateNumber(bank, 2)}</span>
              <span className={styles.mainText}> {formatCurrency(amount)}</span>
            </div>
            <ResponsiveContainer width='50%' height={50}>
              <AreaChart data={rangeData} barSize={20}>
                <defs>
                  <linearGradient id='green' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='5%' stopColor='#FFFFFF' stopOpacity={1} />
                    <stop offset='95%' stopColor='#1FE341' stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id='yellow' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='35%' stopColor='#FFFFFF' stopOpacity={1} />
                    <stop offset='100%' stopColor='#F9A000' stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id='red' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='35%' stopColor='#FFFFFF' stopOpacity={1} />
                    <stop offset='100%' stopColor='#FD3758' stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey='amt'
                  fill={`url(#${generateGradient(index).gradient})`}
                  stroke={generateGradient(index).stroke}
                  type='linear'
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        );
      })}
    </section>
  );
};

export default SubRecentTransactions;
