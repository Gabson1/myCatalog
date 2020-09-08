import _ from 'lodash';

export const selectCreatorId = state => _.get(state, 'user.user._id', '');
export const selectCatalogList = state => _.get(state, 'catalog.catalogs', []);
export const selectCatalogId = state => _.get(state, 'catalog.catalogEditId', null);
export const selectAssetId = state => _.get(state, 'catalog.assetEditId', null);

export const selectCatalogEditing = state => _.get(state, 'catalog.editing', false);
export const selectCatalogLoading = state => _.get(state, 'catalog.loading', true);
