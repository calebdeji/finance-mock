import React, { useRef, useState } from 'react';

import styles from '../styles/activeCards.module.scss';
import { ReactComponent as CardIcon } from '../images/cardIcon.svg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  // centerMode: true, // enable center mode
  // centerPadding: '50px',
};

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

const cardsButton = [
  { id: 'card-button-1', index: 0 },
  { id: 'card-button-2', index: 1 },
  { id: 'card-button-3', index: 2 },
];

const ActiveCards = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const ref = useRef(null);

  const handleClick = ({ target: { dataset } }) => {
    setCurrentIndex((currentIndex) => {
      const dataSetIndex = Number(dataset.index);
      if (currentIndex > dataSetIndex) {
        ref.current.scrollTo({
          right: dataSetIndex * 263,
        });
      } else {
        ref.current.scrollTo({
          left: dataSetIndex * 263,
        });
      }
      return dataSetIndex;
    });
  };

  return (
    <section className={styles.container}>
      <h2 className={`${styles.bigText} ${styles.sectionsTitle}`}> Active Cards </h2>
      <div className={styles.containerCards}>
        <Slider
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ]}
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
                <div className={styles.containerCardsEachCardNumber}>
                  <span>4317</span>
                  <span>4317</span>
                  <span>4317</span>
                  <span>4317</span>
                </div>
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
