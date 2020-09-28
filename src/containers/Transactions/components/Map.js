import React from 'react';

import styles from '../styles/map.module.scss';
import MapImage from '../images/map.svg';

const Map = () => {
  return (
    <div className={styles.container}>
      <img src={MapImage} alt='' />
    </div>
  );
};

export default Map;
