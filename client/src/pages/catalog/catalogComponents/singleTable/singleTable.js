import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { Grid } from 'semantic-ui-react';

import Spinner from '../../../../component/spinner/spinner';
import { SingleTableItemHeader } from "./singleTableItemHeader";
import { SingleTableItemContent } from './singleTableItemContent';
import { NoTables } from "../noTables";

// import { selectMandateListError, selectMandateListIsFetching, selectMandatesList } from '../selectors/mandates.sel';

export const selectMandatesList = state => _.get(state, 'mandates.mandates', []);
export const selectMandateListIsFetching = state => _.get(state, 'mandates.fetching', false);
export const selectMandateListError = state => _.get(state, 'mandates.error', undefined);

export const SingleTable = () => {
  // const tables = useSelector(selectMandatesList);
  const fetching = useSelector(selectMandateListIsFetching);
  // const error = useSelector(selectMandateListError);

  const headers = [
    { 'header_id': 1 },
  ]
  const tables = [
    { 'asset_id': 1 },
    { 'asset_id': 2 },
    { 'asset_id': 3 }
  ];

  return (
    <Grid>
      {
        headers.map((headerData) => (
          <SingleTableItemHeader key={`Single-table-item-${headerData.header_id}`} {...headerData} />
        ))
      }
      {
        tables.map((tableData) => (
          <SingleTableItemContent key={`Single-table-item-${tableData.asset_id}`} {...tableData} />
        ))
      }
      { fetching && <Spinner /> }
    </Grid>
  );
}

// Todo: Depending on the asset class, render different asset list headers....
