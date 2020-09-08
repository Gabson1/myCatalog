import React from 'react';

import SideBar from '../../component/sidebar/sidebar';

import CatalogOverviewComponent from './catalogOverviewComponents/catalogOverviewComponent';

import './catalog.css';

const Catalog = () => (
  <main className="page">
    <SideBar />
    <section id="pageContent">
      <div id="headerContent">
        <h2>Catalog: An overview of your assets</h2>
      </div>
      <div id="modalRoot" />
      <CatalogOverviewComponent />
    </section>
  </main>
);

export default Catalog;
