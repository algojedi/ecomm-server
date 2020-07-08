import React from 'react'

import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { connect } from 'react-redux'
import CollectionsOverview from './collections-overview';
import {  selectIsCollectionFetching } from '../../redux/selectors/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer