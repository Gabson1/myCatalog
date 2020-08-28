import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Divider, Grid } from 'semantic-ui-react';

import { getAllCatalogsAction } from '../../actions';

import SideBar from '../../component/sidebar/sidebar';
import AssetNewTable from './catalogComponents/newCatalog';
import { NoCatalogs } from './catalogComponents/noCatalogs';
import { SingleCatalog } from './catalogComponents/singleCatalog/singleCatalog';

import './catalog.css';

const Catalog = ({ catalogs, editing }) => {
	const dispatch = useDispatch();

	const itemWidth = 8;
	const columnCount = 2;

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
				<Grid id="catalogContent" columns={columnCount} >
					<Grid.Column width={2}>
						<AssetNewTable />
					</Grid.Column>
					<div id='modal-root' />
					<Grid columns={columnCount} className="catalogsWrapper">
					{ catalogs ?
					catalogs.map((catalogData, index) => (
						<Grid.Column width={itemWidth} id={`catalog-wrapper-${index}`} className="gridItemWrapper" key={`catalog-${index}`} >
							<h4>{catalogData.assetType ? catalogData.assetType : 'PLACEHOLDER'}</h4>
							<p>{catalogData.description ? catalogData.description : 'PLACEHOLDER'}</p>
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
				</Grid>
			</section>
		</main>
	);
};


const mapStateToProps = state => ({
	catalogs: state.catalog.catalogs[0],
	editing: state.catalog.editing
});

export default connect(mapStateToProps)(Catalog);