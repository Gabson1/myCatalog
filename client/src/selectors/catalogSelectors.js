import _ from 'lodash';

export const selectCreatorId = state => _.get(state, 'user.user._id', '');
export const selectCatalogList = state => _.get(state, 'catalog.catalogs', []);
export const selectCatalogEditing = state => _.get(state, 'catalog.editing', false);
export const selectCatalogLoading = state => _.get(state, 'catalog.loading', true);
