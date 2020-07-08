import './shop.scss'

import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { asyncFetchCollections } from '../../redux/actions/actions'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection-page/collection-page.container'

const ShopPage = ({ match }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(asyncFetchCollections())
    }, [dispatch])

    return (
        <div className='shop-page'>
            <Route
                exact path={`${match.path}`}
                component={CollectionsOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}    />
        </div>
    )
}

export default ShopPage
