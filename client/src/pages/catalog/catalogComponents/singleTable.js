import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';

import Spinner from '../../../component/spinner/spinner';
import { SingleTableItem } from './singleTableItem';
import { NoTables } from "./noTables";

// import { selectMandateListError, selectMandateListIsFetching, selectMandatesList } from '../selectors/mandates.sel';

export const selectMandatesList = state => _.get(state, 'mandates.mandates', []);
export const selectMandateListIsFetching = state => _.get(state, 'mandates.fetching', false);
export const selectMandateListError = state => _.get(state, 'mandates.error', undefined);

export const SingleTable = () => {
  const tables = useSelector(selectMandatesList);
  const fetching = useSelector(selectMandateListIsFetching);
  const error = useSelector(selectMandateListError);

  return (
    <Fragment>
      {
        !error && tables && tables.length > 0 ?
          tables.map((tableData) => (
            <SingleTableItem key={`Single-table-item-${tableData.asset_id}`} {...tableData} />
          ))
          :
          <NoTables />
      }
      { fetching && <Spinner /> }
    </Fragment>
  );
}
