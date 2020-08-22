import React from 'react';
import { Divider, Grid } from "semantic-ui-react";

import SideBar from '../../component/sidebar/sidebar';
import { SingleCatalog } from './catalogComponents/singleCatalog/singleCatalog';
import { NoCatalogs } from "./catalogComponents/noCatalogs";
import AssetNewTable from "./catalogComponents/newCatalog";

import plusIcon from '../../assets/plus.svg';
import './catalog.css';

const Catalog = () => {
	const itemWidth = 7;

	const tables = [
		{ 'table_id': 1 },
		{ 'table_id': 2 },
		{ 'table_id': 3 }
	]

	return (
		<main className="page">
			<SideBar />
			<section id="pageContent">
				<div id="headerContent">
					<h2>Catalog: An overview of your assets</h2>
				</div>
				<Grid id="catalogContent" >
					<Grid.Column width={itemWidth/5}>
						<AssetNewTable />
					</Grid.Column>
					{ tables.length > 0 && tables ?
						tables.map((tablesData) => (
							<Grid.Column className="gridItemWrapper" width={itemWidth} key={`tables-${tablesData.table_id}`} >
								<h4>{'assetType'}</h4>
								<p>{'description'}</p>
								<Divider />
								<SingleCatalog />
							</Grid.Column>
						))
						:
						<NoCatalogs />
					}
				</Grid>
			</section>
		</main>
	);
};

export default Catalog;
