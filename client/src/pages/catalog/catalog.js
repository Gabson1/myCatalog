import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Divider, Grid } from 'semantic-ui-react';

import { getAllCatalogsAction } from '../../actions';

import SideBar from '../../component/sidebar/sidebar';
import AssetNewTable from './catalogComponents/newCatalog';
import { NoCatalogs } from './catalogComponents/noCatalogs';
import { SingleCatalog } from './catalogComponents/singleCatalog/singleCatalog';

import './catalog.css';

const Catalog = ({ catalogs }) => {
	const dispatch = useDispatch();

	const itemWidth = 8;

	useEffect(() => {
		dispatch(getAllCatalogsAction())
	}, []);

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
					{ catalogs ?
					catalogs.map((catalogData, index) => (
						<Grid.Column id={`catalog-wrapper-${index}`} className="gridItemWrapper" width={itemWidth} key={`catalog-${index}`} >
							<h4>{catalogData.assetType}</h4>
							<p>{catalogData.description}</p>
							<Divider />
							{ catalogData.assets.length > 0 ?
								catalogData.assets.map((assetData, index) => (
								<SingleCatalog key={`catalog-${index}`} {...assetData}/>
							))
								:
								<b>No assets added yet</b>
							}
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


const mapStateToProps = state => ({
	catalogs: state.catalog.catalogs[0]
});

export default connect(mapStateToProps)(Catalog);