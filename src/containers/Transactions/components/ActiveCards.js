import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from '../styles/activeCards.module.scss';
import { ReactComponent as CardIcon } from '../images/cardIcon.svg';

const cards = [
  {
    id: 'card-1',
    number: 4319531202151289,
    name: 'Thomas Cullen',
    date: '09/15',
    index: 1,
  },
  {
    id: 'card-2',
    number: 4319531202151092,
    name: 'Cullen Thomas',
    date: '09/15',
    index: 2,
  },
  {
    id: 'card-4',
    number: 2312531202151092,
    name: 'Cullen Thomas',
    date: '09/15',
    index: 3,
  },
];

/**
 *
 * @param { number } accountNumber
 */

const splitCardNumber = (accountNumber) => {
  return accountNumber
    .toString()
    .match(/.{1,4}/g)
    .map((element, index) => {
      return <span key={`${element}-${index}`}>{element}</span>;
    });
};

const ActiveCards = () => {
  return (
    <section className={styles.container}>
      <h2 className={`${styles.bigText} ${styles.sectionsTitle}`}> Active Cards </h2>
      <div className={styles.containerCards}>
        <Slider
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          dots
          centerMode={true}
          centerPadding='50px'
          infinite={true}
          appendDots={(dots) => <ul className={styles.containerCardsButtonsElement}> {dots} </ul>}
        >
          {cards.map(({ date, id, name, number, index }) => {
            return (
              <div className={styles.containerCardsEachCard} key={id}>
                <CardIcon />
                <div className={styles.containerCardsEachCardNumber}>{splitCardNumber(number)}</div>
                <div className={styles.containerCardsEachCardMeta}>
                  <div className={styles.containerCardsEachCardMetaSubSection}>
                    <span className={styles.tinyText}>Card Holder</span>
                    <span className={styles.subText}> {name} </span>
                  </div>
                  <div className={styles.containerCardsEachCardMetaSubSection}>
                    <span className={styles.tinyText}> Expires </span>
                    <span className={styles.subText}> {date} </span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default ActiveCards;
