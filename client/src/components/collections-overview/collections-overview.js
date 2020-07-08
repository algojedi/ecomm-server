import React from 'react'
import { connect } from 'react-redux'
import CollectionPreview from '../collection-preview/collection-preview'
import './collections-overview.scss'
import { selectCollectionsForPreview } from '../../redux/selectors/shop.selectors'
import { createStructuredSelector } from 'reselect'

const CollectionsOverview = ({ collections }) => {
    return (
        <div className='collections-overview'>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
})
export default connect(mapStateToProps)(CollectionsOverview)
