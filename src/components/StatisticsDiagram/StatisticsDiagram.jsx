import React from 'react';

import Select from 'lib/Select';

import styles from './StatisticsDiagram.module.scss';

const StatisticsDiagram = () => {
  return (
    <div className={styles.blockdiagram}>
      <h2 className={styles.title}>Statistics </h2>
      <div className={styles.diagram}></div>
      <Select monthsssssss={[1, 2, 3]} />
    </div>
  );
};

export default StatisticsDiagram;
