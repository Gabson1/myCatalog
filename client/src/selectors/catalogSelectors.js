import _ from 'lodash';

export const selectCreatorId = state => _.get(state, 'user.user._id', '');

export const selectCatalogList = state => _.get(state, 'catalog.catalogs', []);

export const selectCatalogEditing = state => _.get(state, 'catalog.editing', false);

// Todo: Make these work
export const selectCatalogListIsFetching = state => _.get(state, 'mandates.fetching', false);
export const selectCatalogListError = state => _.get(state, 'mandates.error', undefined);
