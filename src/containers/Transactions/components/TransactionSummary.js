import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';

import styles from '../styles/transactionSummary.module.scss';

const data = [
  {
    name: 'Mon',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Thur',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Fri',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sat',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sun',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const metaData = [
  {
    id: 'meta-1',
    text: 'ATM Cards',
    className: styles.containerMetaSectionRadialSpanATM,
  },
  {
    id: 'meta-2',
    text: 'Remittance',
    className: styles.containerMetaSectionRadialSpanRemittance,
  },
  {
    id: 'meta-3',
    text: 'Online Transactions',
    className: styles.containerMetaSectionRadialSpanOnline,
  },
];

const TransactionSummary = () => {
  return (
    <section className={styles.container}>
      <header>
        <h2 className={`${styles.bigText} ${styles.sectionsTitle}`}> Transaction Summary </h2>
      </header>
      <div className={styles.containerGraph}>
        <ResponsiveContainer>
          <BarChart data={data} barSize={4}>
            <XAxis dataKey='name' orientation='top' axisLine={false} tickLine={false} />
            <Bar
              dataKey='pv'
              stackId='a'
              fill='#02C39A'
              radius={[10, 10, 0, 0]}
              background={{ fill: '#C4C4C4' }}
            />
            <Bar dataKey='uv' stackId='a' fill='#FD3758' radius={[10, 10, 0, 0]} />
            <Bar dataKey='amt' stackId='a' fill='#046AF3' radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.containerMeta}>
        {metaData.map(({ id, text, className }) => {
          return (
            <div key={id} className={styles.containerMetaSection}>
              <span className={`${styles.containerMetaSectionRadialSpan} ${className}`}></span>
              <span className={styles.subText}>{text}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TransactionSummary;
