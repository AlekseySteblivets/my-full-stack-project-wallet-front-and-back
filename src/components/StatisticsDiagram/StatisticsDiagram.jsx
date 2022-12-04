import React from 'react';

import Select from 'lib/Select';
import { monthsList } from '../../utils/monthsList';
import { yearsList } from '../../utils/yearsList';

import styles from './StatisticsDiagram.module.scss';
import ProductСategories from 'components/ProductСategories';
import TotalSum from 'components/TotalSum';
import Diagram from 'components/Diagram';

const StatisticsDiagram = () => {
  return (
    <div className={styles.blockdiagram}>
      <h2 className={styles.title}>Statistics </h2>
      <Diagram />
      {/* <div className={styles.diagram}></div> */}
      <Select arrData={monthsList} />
      <Select arrData={yearsList} />
      <ProductСategories />
      <TotalSum />
    </div>
  );
};

export default StatisticsDiagram;
