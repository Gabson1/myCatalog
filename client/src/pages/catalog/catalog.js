import React from 'react';
import { Divider, Grid, Button, Image } from "semantic-ui-react";

import SideBar from '../../component/sidebar/sidebar';
import { SingleTable } from './catalogComponents/singleTable';

import plusIcon from '../../assets/plus.svg';
import './catalog.css';

const Catalog = () => {
	const itemWidth = 5;

	return (
		<main className="page">
			<SideBar />
			<section id="pageContent">
				<div id="headerContent">
					<h2>Catalog: An overview of your assets</h2>
				</div>
				<Grid id="catalogContent" >
					<Grid.Column width={itemWidth/5}>
						<Button className="newCatalogButton">
							<Image src={plusIcon} size="tiny"/>
						</Button>
					</Grid.Column>
					<Grid.Column className="gridItemWrapper" width={itemWidth}>
						<h4>{'assetType'}</h4>
						<Divider />
						<SingleTable />
					</Grid.Column>
				</Grid>
			</section>
		</main>
	);
};

export default Catalog;
