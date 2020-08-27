import React, { useState, useCallback, useEffect } from 'react';
import { Divider, Grid } from "semantic-ui-react";

import SideBar from '../../component/sidebar/sidebar';
import { SingleCatalog } from './catalogComponents/singleCatalog/singleCatalog';
import { NoCatalogs } from "./catalogComponents/noCatalogs";
import AssetNewTable from "./catalogComponents/newCatalog";

import {getAllCatalogsAction} from "../../actions";
import plusIcon from '../../assets/plus.svg';
import './catalog.css';
import Loading from "../../component/loading/loading";
import {getAllCatalogsRequest} from "../../effects";

const Catalog = (props) => {
	const [catalogs, setCatalogs] = useState([]);
	const [loading, setLoading] = useState(true);
	const itemWidth = 7;

	const getAllCatalogs = useCallback(async () => {
		try {
			// const res = await getAllCatalogsAction()
			const res = await getAllCatalogsRequest();
			setCatalogs(res.data.catalog);
			setLoading(false);
		} catch (err) {
			console.log(`%c There was a problem: ${err}`, 'background: #222; color: white; border: 1px dotted white; padding: 10px');
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		getAllCatalogs();
	}, [getAllCatalogs]);

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
					{ loading && <Loading />}
					{ catalogs.length > 0 && catalogs ?
					catalogs.map((catalogData, index) => (
						<Grid.Column className="gridItemWrapper" width={itemWidth} key={`catalog-${index}`} >
							<h4>{catalogData.assetType}</h4>
							<p>{catalogData.description}</p>
							<Divider />
							<SingleCatalog {...props} />
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