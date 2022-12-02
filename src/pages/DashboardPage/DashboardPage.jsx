import React from 'react';
import { Component } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Container from 'components/Container/Container';
import Header from '../../components/Header/Header';

import Currency from '../../components/Currency/Currency';

import css from './DashboardPage.module.scss';
import SideBar from 'components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import LayoutSection from '../../views/LayoutSection';

import styles from './DashboardPage.module.scss';
import StatisticsDiagram from 'components/StatisticsDiagram/StatisticsDiagram';

const DashboardPage = () => {
  return (
    <>
      <LayoutSection element="header" classNameProps={styles.header}>
        <Container>
          <Header />
        </Container>
      </LayoutSection>
      <main>
        <LayoutSection>
          <Container>
            <SideBar />
            {/* <StatisticsDiagram /> */}
            <Routes>
              <Route exact path="/statistics" element={<StatisticsDiagram />} />
              <Route exact path="/currency" element={<Currency />} />
            </Routes>
          </Container>
        </LayoutSection>
      </main>
    </>

    // <Container>
    //   <div className={css.home_side}>
    // <div className={css.container}>
    //     <Header />
    //     <div className={css.backg}>
    //       <SideBar />

    //     </div>

    //  <Outlet />
    //   </div>

    // </div>
    // </Container>
  );
};

export default DashboardPage;
